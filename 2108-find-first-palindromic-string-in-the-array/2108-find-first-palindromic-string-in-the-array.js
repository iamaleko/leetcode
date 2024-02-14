const firstPalindrome = (words) => {
  for (const word of words)
    for (let l = 0, r = word.length - 1; word[l] === word[r]; )
      if (l++ >= r--) return word;
  return '';
};