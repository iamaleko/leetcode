const reverseWords = (s) => {
  let m = s.length, l = 0, r = 0;
  while (r < m) {
    if (s[l] === ' ') {
      r = ++l;
    } else if (s[r] !== ' ') {
      ++r;
    } else {
      s = s.slice(r, m) + ' ' + s.slice(l, r) + s.slice(m);
      m -= r;
      l = r = 0;
    }
  }
  return s.trim();
};

// const reverseWords = (s) => {
//   let l = '', r = '', i = 0;
//   for (; i < s.length; i++) if (s[i] !== ' ') s[i - 1] === ' ' ? (r = l + ' ' + r, l = s[i]) : l += s[i];
//   return (l + ' ' + r).trim();
// };