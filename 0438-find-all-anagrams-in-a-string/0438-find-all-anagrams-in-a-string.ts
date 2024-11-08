function findAnagrams(s: string, p: string): number[] {
  if (p.length > s.length) return [];

  const counter: Record<string, number> = {};
  for (const ch of p) counter[ch] = counter.hasOwnProperty(ch) ? counter[ch] + 1 : 1;

  let ans: number[] = [];
  for (let m = 0, l = 0, r = 0, _counter: Record<string, number> = {}; r < s.length; r++) {
    if (counter.hasOwnProperty(s[r])) {
      if (!_counter.hasOwnProperty(s[r])) _counter[s[r]] = 0;
      if (_counter[s[r]] === counter[s[r]]) m -= counter[s[r]];
      _counter[s[r]]++;
      if (_counter[s[r]] === counter[s[r]]) m += counter[s[r]];
    }
    if (r - l >= p.length) {
      if (_counter.hasOwnProperty(s[l])) {
        if (_counter[s[l]] === counter[s[l]]) m -= counter[s[l]];
        _counter[s[l]]--;
        if (_counter[s[l]] === counter[s[l]]) m += counter[s[l]];
      }
      l++;
    }
    if (m === p.length) ans.push(l);
  }

  return ans;
};