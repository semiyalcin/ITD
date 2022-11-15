import snq from 'snq';
import setRadioRelations from './setRadioRelations';

export default function prepareProdChars(offerInstances) {
  return (offerInstances || []).reduce(
    (acc, offerInstance) => [
      ...acc,
      ...snq(() => offerInstance.productChars, []).map((productChar) => ({
        ...productChar,
        offerInstanceId: offerInstance.productOffer.productOfferId,
        effectsTo: [
          ...snq(() => productChar.effectsTo, []),
          ...(productChar.displayType === 'RADIO_GROUP'
            ? setRadioRelations(
                productChar,
                snq(() => offerInstance.productChars, [])
              )
            : []),
        ],
      })),
      ...prepareProdChars(offerInstance.subItems || []),
    ],
    []
  );
}
