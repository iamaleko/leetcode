function findSubstring(s: string, words: string[]): number[] {
  const size = words.length;
  const chunk = words[0].length;
  const map = new Map<string, number>();
  const ans: number[] = [];
  for (const word of words) map.set(word, (map.get(word) ?? 0) + 1)
  for (let i = 0; i <= (s.length - size * chunk); i++) {
    if (map.has(s.substr(i, chunk))) {
      const _map = new Map(map);
      let _size = size;
      for (let ii = i; ii < i + size * chunk; ii += chunk) {
        const _word = s.substr(ii,chunk);
        const count = _map.get(_word);
        if (count) {
          _map.set(_word, count - 1);
          --_size;
        } else {
          break;
        }
      }
      if (!_size) {
        ans.push(i);
      }
    }
  }
  return ans;
};