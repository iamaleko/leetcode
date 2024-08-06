function minimumPushes(word: string): number {
  // count chars
  const freq = new Map<string, number>()
  for (const ch of word) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }
  // remap chars according to frequency
  const sorted = Array.from(freq.values()).sort((a, b) => b - a),
        keys = new Array(8).fill(0);
  let ans = 0,
      key = 0;
  for (const freq of sorted) {
    ans += freq * ++keys[key % keys.length]
    key++;
  }
  return ans;
};