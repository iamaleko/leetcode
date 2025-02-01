function findSubstring(s: string, words: string[]): number[] {
  const size = words.length;
  const chunk = words[0].length;
  const map = new Map<string, number>();
  const ans: number[] = [];
  for (const word of words) map.set(word, (map.get(word) ?? 0) + 1)
  main: for (let i = 0, m = s.length - size * chunk; i <= m; i++) {
    const count = new Map();
    for (let j = i; j < i + size * chunk; j += chunk) {
      const word = s.slice(j, j + chunk);
      if (!map.has(word)) continue main;
      count.set(word, (count.get(word) ?? 0) + 1)
    }
    for (const [key, val] of map) {
      if (count.get(key) !== val) continue main;
    }
    ans.push(i);
  }
  return ans;
};