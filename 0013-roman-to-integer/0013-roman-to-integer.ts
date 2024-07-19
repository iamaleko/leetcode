function romanToInt(s: string): number {
  if (s.length === 0) return 0;
  const dict: Readonly<Record<string, number>> = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
  let ans = dict[s[0]];
  for (let i = 1; i < s.length; i++) {
    ans += dict[s[i]];
    if (dict[s[i]] > dict[s[i - 1]]) {
      ans -= dict[s[i - 1]] * 2;
    }
  }
  return ans;
};