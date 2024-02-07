const maxDepth = (s) => {
  let max = 0, level = 0;
  for (const chr of s) {
    if (chr === '(') {
      ++level;
      if (level > max) max = level;
    } else if (chr === ')') {
      --level;
    }
  }
  return max;
};