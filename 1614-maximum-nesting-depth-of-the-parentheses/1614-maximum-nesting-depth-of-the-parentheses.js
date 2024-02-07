const maxDepth = (s) => {
  let max = 0, level = 0, i = 0;
  for (; i < s.length; ++i) {
    switch (s[i]) {
      case '(': if (++level > max) max = level; break;
      case ')': --level; break;
    }
  }
  return max;
};