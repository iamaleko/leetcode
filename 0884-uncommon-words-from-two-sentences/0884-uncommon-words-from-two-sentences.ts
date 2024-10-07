function uncommonFromSentences(s1: string, s2: string): string[] {
  const m: Record<string, number> = {};
  for (const word of (s1 + ' ' + s2).split(' ')) {
    if (m.hasOwnProperty(word)) {
      m[word]++;
    } else {
      m[word] = 1;
    }
  }
  const ans: string[] = [];
  for (const word in m) if (m[word] === 1) ans.push(word);
  return ans;
};