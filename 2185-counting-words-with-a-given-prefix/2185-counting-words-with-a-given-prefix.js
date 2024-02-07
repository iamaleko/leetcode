const prefixCount = (words, pref) => {
  let res = 0;
  for (const word of words) if (word.startsWith(pref)) ++res;
  return res;
};