function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;
  const map: Record<string, number> = {};
  let max = 1, l = 0, r = 0;
  for (let c of s) {
    if (c in map && map[c] >= l) {
      max = Math.max(max, r - l);
      l = map[c] + 1;
    }
    map[c] = r++;
  }
  return Math.max(max, r - l);
};