function compressedString(word: string): string {
  let ans: string[] = [], last = '', count = 0;
  for (const ch of word) {
    if (count === 9 || last && ch !== last) {
      ans.push(`${count}${last}`);
      last = '';
      count = 0;
    }
    if (!last) last = ch;
    if (ch === last) count++;
  }
  if (last) ans.push(`${count}${last}`);
  return ans.join('');
};