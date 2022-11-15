export default function getEffectedProductChars(prodChars, prodChar) {
  return prodChar.effectsTo.map((prodCharRelation) => {
    const effectedProductChar = prodChars.find(
      (i) => i.charId === prodCharRelation.charId
    );
    const effectedProductChars = effectedProductChar
      ? getEffectedProductChars(prodChars, {
          ...effectedProductChar,
          effectsTo: effectedProductChar.effectsTo.filter(
            (effected) => effected.charId !== prodChar.charId
          ),
        })
      : [];
    return { ...effectedProductChar, effectedProductChars, prodCharRelation };
  });
}
