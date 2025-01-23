function lengthOfLongestSubstring(s: string): number {
  let ans = -1;
  for (let set = new Set<string>(), l = 0, r = 0; r < s.length; r++) {
    while (set.has(s[r])) set.delete(s[l++])
    set.add(s[r])
    if (ans < r - l) {
      ans = r - l;
    }
  }
  return ans + 1;
};