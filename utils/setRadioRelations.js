import checkProdCharTrueValue from './checkProdCharTrueValue';

export default function setRadioRelations(productChar, productChars) {
  return productChars
    .filter(
      (_productChar) =>
        _productChar.charId !== productChar.charId &&
        _productChar.displayOrder === productChar.displayOrder &&
        _productChar.displayType === 'RADIO_GROUP' &&
        _productChar.visible
    )
    .map((_productChar) => ({
      charId: _productChar.charId,
      effectTypeShrtCode: 'SET',
      updateCharValId: _productChar.valueList.find(
        (value) => !checkProdCharTrueValue(value.charValue)
      ).charValueId,
    }));
}
