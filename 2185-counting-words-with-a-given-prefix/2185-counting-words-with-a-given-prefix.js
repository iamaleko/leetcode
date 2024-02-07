const prefixCount = (words, pref) => {
  let res = 0, len = pref.length;
  for (const word of words) if (word.substr(0, len) === pref) ++res;
  return res;
};