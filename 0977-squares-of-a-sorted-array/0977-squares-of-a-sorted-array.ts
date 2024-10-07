function sortedSquares(nums: number[]): number[] {
  const a: number[] = [],
        b: number[] = [],
        c: number[] = [];
  for (const num of nums) num < 0 ? a.push(num ** 2) : b.push(num ** 2);
  a.reverse();
  let i = 0, j = 0;
  while (i < a.length && j < b.length) a[i] < b[j] ? c.push(a[i++]) : c.push(b[j++]);
  return i === a.length ? c.concat(b.slice(j)) : c.concat(a.slice(i))
};