const firstPalindrome = (words) => {
  for (let i = 0; i < words.length; ++i)
    for (let l = 0, r = words[i].length - 1; words[i][l] === words[i][r]; ++l, --r)
      if (l >= r) return words[i];
  return '';
};