const maxDepth = (s) => {
  let l = 0, m = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') { l++; if (l > m) m = l; }
    else if (s[i] === ')') { l--; }
  }
  return m;
};