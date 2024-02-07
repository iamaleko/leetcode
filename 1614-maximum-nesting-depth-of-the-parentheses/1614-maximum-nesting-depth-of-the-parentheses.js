const maxDepth = (s) => {
  let max = 0, level = 0;
  for (const chr of s) {
    switch (chr) {
      case '(': if (++level > max) max = level; break;
      case ')': --level; break;
    }
  }
  return max;
};