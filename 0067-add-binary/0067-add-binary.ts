function addBinary(a: string, b: string): string {
  let ans = '', i = a.length - 1, j = b.length - 1, mem = 0;
  while (i >= 0 || j >= 0) {
    const sum = parseInt(a[i]||'0') + parseInt(b[j]||'0') + mem;
    ans = (sum % 2) + ans;
    mem = sum / 2 | 0;
    i--;
    j--;
  }
  if (mem) ans = mem + ans;
  return ans;
};