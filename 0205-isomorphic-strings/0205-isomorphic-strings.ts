function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const st: Record<string, string> = {},
        ts: Record<string, string> = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in st && st[s[i]] !== t[i]) return false;
    if (t[i] in ts && ts[t[i]] !== s[i]) return false;
    if (!(s[i] in st)) {
      st[s[i]] = t[i];
      ts[t[i]] = s[i];
    }
  }
  return true;
};