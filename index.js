import snq from 'snq';

import { data } from './quoteITD';
import { activationOI as activationOfferInstances } from './mocks/activationOfferInstances';
import { offerInstances } from './mocks/quoteITD';
import { odfCategorizedCharacteristicsItems } from './mocks/categorizedCharacteristics';
import { subChars } from './mocks/subChars';

import prepareProdChars from './utils/prepareProdChars';
import setRadioRelations from './utils/setRadioRelations';
import checkProdCharTrueValue from './utils/checkProdCharTrueValue';
import prepareChars from './utils/prepareChars';
import getEffectedProductChars from './utils/getEffectedProductChars';
import generateGroup from './utils/generateGroup';
import removeDuplicates from './utils/removeDuplicates';

console.log({ activationOfferInstances });

// get 135 productChars to single array from 21 offerInstances
const productChars = prepareProdChars(activationOfferInstances);
console.log({ productChars });

// get 80 visible productChars
const prodChars = prepareProdChars(activationOfferInstances).filter(
  (productChar) => productChar.visible
);
console.log({ prodChars });

// categorizedCharacteristics service response
console.log({ odfCategorizedCharacteristicsItems });

// add order, parentOrder and parentShortCode to related subOdfCategorizedCharacteristicsItems
// const subChars = prepareChars(odfCategorizedCharacteristicsItems);
console.log({ subChars });

// 27 chars
let grouped = generateGroup(prodChars, subChars);
console.log({ grouped });

// 26 chars
grouped = removeDuplicates(grouped, 'shortCode');
console.log({ grouped });
