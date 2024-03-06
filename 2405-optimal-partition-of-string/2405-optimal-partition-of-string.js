const partitionString = (s) => {
  let res = 0, set = new Set();
  for (let r = 0; r <= s.length; r++) {
    if (set.has(s[r])) {
      set.clear();
      ++res;
    } else if (s[r] === undefined) {
      return ++res;
    }
    set.add(s[r]);
  }
  return 0;
};