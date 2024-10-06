/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(a: number[], m: number, b: number[], n: number): void {
  let j = 0, q = 0, mem: number[] = [];
  for (let i = 0; i < a.length; i++) {
    if (q < mem.length && (i >= m || a[i] > mem[q]) && (j === n || mem[q] < b[j])) {
      if (i < m) mem.push(a[i]);
      a[i] = mem[q++];
    } else if (i >= m || a[i] > b[j]) {
      if (i < m) mem.push(a[i]);
      a[i] = b[j++];
    }
  }
};