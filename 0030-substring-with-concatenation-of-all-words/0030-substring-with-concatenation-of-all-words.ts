function findSubstring(s: string, words: string[]): number[] {
  const total = words.length;
  const chunk = words[0].length;
  const count = new Map<string, number>();
  const found = new Map<string, number>();
  const ans: number[] = [];
  for (const word of words) count.set(word, (count.get(word) ?? 0) + 1)
  main: for (let i = 0, m = s.length - total * chunk; i <= m; i++) {
    found.clear();
    let added = 0;
    for (let j = i, m = i + total * chunk; j + chunk <= m; j += chunk) {
      const word = s.substr(j, chunk);
      const val = (found.get(word) ?? 0) + 1;
      if (val > (count.get(word) ?? 0)) continue main;
      found.set(word, val)
      added++
    }
    if (added === total) {
      ans.push(i);
    }
  }
  return ans;
};