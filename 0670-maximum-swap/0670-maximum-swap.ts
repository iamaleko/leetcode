function maximumSwap(num: number): number {
  // running sum
  const s = String(num),
        rs: number[] = [];
  for (let i = s.length - 1, m = i; i >= 0; i--) {
    rs[i] = s[m] < s[i] ? m = i : m;
  }
  // best swap
  for (let i = 0; i < s.length; i++) {
    if (s[i] < s[rs[i]]) {
      return parseInt(
        s.slice(0, i) +
        s[rs[i]] +
        s.slice(i + 1, rs[i]) +
        s[i] +
        s.slice(rs[i] + 1)
      , 10);
    }
  }
  return num;
};