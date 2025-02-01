function findSubstring(s: string, words: string[]): number[] {
  const size = words.length;
  const chunk = words[0].length;
  const map = new Map<string, number>();
  const ans: number[] = [];
  for (const word of words) map.set(word, (map.get(word) ?? 0) + 1)
  main: for (let i = 0, m = s.length - size * chunk; i <= m; i++) {
    const count = new Map();
    let found = 0;
    for (let j = i; j < i + size * chunk; j += chunk) {
      const word = s.substr(j, chunk);
      const val = (count.get(word) ?? 0) + 1;
      if (val > (map.get(word) ?? 0)) continue main;
      count.set(word, val)
      found++
    }
    if (found === size) {
      ans.push(i);
    }
  }
  return ans;
};