export default function removeDuplicates(originalArray, prop) {
  const newArray = [];
  const lookupObject = {};

  originalArray.forEach((itmObj) => {
    lookupObject[itmObj[prop]] = itmObj;
  });

  Object.keys(lookupObject).forEach((i) => {
    newArray.push(lookupObject[i]);
  });
  return newArray;
}
