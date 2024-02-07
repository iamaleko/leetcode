const maxDepth = (s) => {
  let max = 0, level = 0, i = 0;
  for (; i < s.length; ++i) {
    if (s[i] === '(') {
      ++level;
      if (level > max) max = level;
    } else if (s[i] === ')') {
      --level;
    }
  }
  return max;
};