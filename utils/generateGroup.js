import getEffectedProductChars from './getEffectedProductChars';

export default function generateGroup(prodChars, subChars) {
  return prodChars
    .map((prodChar) => {
      const subChar = subChars.find(
        (subChar) => subChar.charId === prodChar.charId
      );
      const effectedProductChars = getEffectedProductChars(prodChars, prodChar);
      return { ...prodChar, subChar, effectedProductChars };
    })
    .filter((prodChar) => prodChar.subChar)
    .sort((a, b) => (a.subChar.parentOrder > b.subChar.parentOrder ? 1 : -1))
    .sort((a, b) =>
      a.subChar.parentOrder === b.subChar.parentOrder
        ? a.subChar.order > b.subChar.order
          ? 1
          : -1
        : 0
    );
}
