function countConsistentStrings(allowed: string, words: string[]): number {
  let ans = 0;
  const allowedSet = new Set(allowed);
  main: for (const word of words) {
    for (const ch of new Set(word)) {
      if (!allowedSet.has(ch)) continue main;
    }
    ans++;
  }
  return ans;
};