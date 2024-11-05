function minChanges(s: string): number {
  const parts: [number, number][] = [];
  let last = '', count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== last) {
      if (count) parts.push([last === '1' ? 1 : 0, count])
      last = s[i];
      count = 0;
    }
    count++;
  }
  if (count) parts.push([last === '1' ? 1 : 0, count]);
  
  let ans = 0;
  for (let i = 1; i < parts.length; i++) {
    if (parts[i - 1][1] % 2 !== 0) {
      parts[i - 1][1]++;
      parts[i][1]--;
      ans++;
    }
  }

  return ans;
};