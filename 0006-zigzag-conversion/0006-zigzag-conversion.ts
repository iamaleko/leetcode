function convert(s: string, n: number): string {
  if (n === 1 || s.length < n) return s;
  const rows: string[] = new Array(n).fill('');
  let row = 0, step = 1;
  n--;
  for (let ch of s) {
    rows[row] += ch
    row += step
    if (row === n || row === 0) step = -step;
  }
  return rows.join('')
};