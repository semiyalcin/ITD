export default function prepareChars(chars) {
  return (chars || [])
    .filter((char) => char.shrtCode === 'ADD_PRFRNCS_PRNT')
    .reduce((acc, char, parentIndex) => {
      const subChars = char.subOdfCategorizedCharacteristicsItems;
      const modifySubChars = subChars.map((subChar, index) => ({
        ...subChar,
        parentShortCode: char.shrtCode,
        order: index,
        parentOrder: parentIndex,
      }));

      return [...acc, ...modifySubChars];
    }, []);
}
