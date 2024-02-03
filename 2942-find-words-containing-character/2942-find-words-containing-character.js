const findWordsContaining = (words, x) => {
  const res = [];
  for (let i = 0; i < words.length; ++i) if (~words[i].indexOf(x)) res.push(i);
  return res;
};