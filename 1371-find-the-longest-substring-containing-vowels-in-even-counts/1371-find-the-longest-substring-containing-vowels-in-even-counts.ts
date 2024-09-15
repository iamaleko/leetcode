function findTheLongestSubstring(s: string): number {
  const v: Readonly<Record<string, number>> = { 'a': 1, 'e': 2, 'i': 4, 'o': 8, 'u': 16 },
        m: Record<number, number> = { 0: -1 };
  let mask = 0,
      ans = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] in v) mask ^= v[s[i]];
    if (mask in m) {
      if (ans < i - m[mask]) ans = i - m[mask];
    } else {
      m[mask] = i;
    }
  }
  return ans;
};
