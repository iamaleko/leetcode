function isSubsequence(s: string, t: string): boolean {
  if (!s) return true;
  for (let i = 0, j = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      j++;
      if (j === s.length) return true;
    }
  }
  return false;
};