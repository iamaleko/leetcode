function reverseVowels(s: string): string {
  const vovels = new Set(['a','e','i','o','u','A','E','I','O','U']);
  const ext = [];
  const arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (vovels.has(arr[i])) {
      ext.push(arr[i]);
      arr[i] = null;
    }
  }
  ext.reverse();
  for (let i = 0, p = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      arr[i] = ext[p++];
    }
  }
  return arr.join('');
};