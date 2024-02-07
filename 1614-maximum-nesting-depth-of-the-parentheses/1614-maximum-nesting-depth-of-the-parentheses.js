const maxDepth = (s) => {
  let max = 0, level = 0, i = 0;
  for (; i < s.length; ++i) {
    switch (s.charCodeAt(i)) {
      case 40: if (++level > max) max = level; break;
      case 41: --level; break;
    }
  }
  return max;
};