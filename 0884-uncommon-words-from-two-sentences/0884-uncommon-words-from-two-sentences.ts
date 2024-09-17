function uncommonFromSentences(s1: string, s2: string): string[] {
  const words = (s1 + ' ' + s2).split(' '),
        m = new Map<string, number>();
  for (const word of words) {
    m.set(word, (m.get(word) ?? 0) + 1);
  }
  const ans: string[] = [];
  for (const [word, count] of m.entries()) {
    if (count === 1) ans.push(word);
  }
  return ans;
};