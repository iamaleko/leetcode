const reverseWords = (s) => {
  let l = '', r = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      if (s[i - 1] === ' ') {
        r = l + ' ' + r;
        l = '';
      }
      l += s[i];
    }
  }
  return (l + ' ' + r).trim();
};