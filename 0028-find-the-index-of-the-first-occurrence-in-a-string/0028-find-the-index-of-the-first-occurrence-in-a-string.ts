function strStr(haystack: string, needle: string): number {
  for (let i = 0, j: number; i <= haystack.length - needle.length; i++) {
    j = 0;
    while (haystack[i + j] === needle[j]) if (++j === needle.length) return i;
  }
  return -1;
};