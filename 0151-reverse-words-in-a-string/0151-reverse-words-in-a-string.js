const reverseWords = (s) => {
  let l = '', r = '', i = 0;
  for (; i < s.length; i++) if (s[i] !== ' ') s[i - 1] === ' ' ? (r = l + ' ' + r, l = s[i]) : l += s[i];
  return l + ' ' + r.trim();
};