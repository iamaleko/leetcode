function compressedString(word: string): string {
  if (!word) return '';

  let ans: string[] = [], last = '', count = 0;
  for (let i = 0; i < word.length; i++) {
    if (count === 9 || last && word[i] !== last) {
      ans.push(`${count}${last}`);
      count = 0;
      last = '';
    }

    if (!last) last = word[i]
    if (word[i] === last) count++;
  }
  ans.push(`${count}${last}`);

  return ans.join('');
};