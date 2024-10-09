function firstUniqChar(s: string): number {
  const m: Record<number, number> = {};
  for (let i = 0; i < s.length; i++) m[s[i]] = m.hasOwnProperty(s[i]) ? s.length : i;
  let ans = s.length;
  for (const ch in m) if (ans > m[ch]) ans = m[ch];
  return ans === s.length ? -1 : ans;
};