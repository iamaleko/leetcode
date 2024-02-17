const rotateString = (s, goal) => {
  let n = s.length;
  while (n--) {
    if (s === goal) return true;
    s = s.substr(1) + s[0];
  }
  return false;
};