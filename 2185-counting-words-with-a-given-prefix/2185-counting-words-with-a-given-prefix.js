const prefixCount = (words, pref) => {
  let res = 0, i = 0;
  for (; i < words.length; words[i++].startsWith(pref) && ++res);
  return res;
};