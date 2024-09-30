function isAlienSorted(words: string[], order: string): boolean {
  const map: Record<string, number> = {};
  for (let i = 0; i < order.length; i++) map[order[i]] = i;
  main: for (let i = 1; i < words.length; i++) {
    const a = words[i - 1], b = words[i];
    const m = Math.min(a.length, b.length);
    for (let j = 0; j < m; j++) {
      if (map[a[j]] < map[b[j]]) continue main;
      if (map[a[j]] > map[b[j]]) return false;
    }
    if (a.length > b.length) return false;
  }
  return true;
};