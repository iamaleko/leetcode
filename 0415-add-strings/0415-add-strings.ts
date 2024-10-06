function addStrings(a: string, b: string): string {
  let ans = '', i = a.length - 1, j = b.length - 1, mem = 0;
  while (i >= 0 || j >= 0) {
    const sum = mem + (i >= 0 ? parseInt(a[i], 10) : 0) + (j >= 0 ? parseInt(b[j], 10) : 0);
    ans = String(sum % 10) + ans;
    mem = Math.floor(sum / 10);
    i--;
    j--;
  }
  if (mem) ans = String(mem) + ans;
  return ans;
};