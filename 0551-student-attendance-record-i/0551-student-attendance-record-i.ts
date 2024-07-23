function checkRecord(s: string): boolean {
  for (let a = 0, l = 0, r = 0; r <= s.length; r++) {
    if (s[r] === 'A' && a++) return false;
    if (s[r] !== 'L') {
      if (r - l > 2) return false;
      l = r + 1;
    }
  }
  return true;
};