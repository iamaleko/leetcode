// function arrayRankTransform(arr: number[]): number[] {
//   const rank: Record<number, number> = {};
//   [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
//   return arr.map((v) => rank[v]);
// };

// Radix sort
// const radixSort = (arr: number[]): number[] => {
//   const min = Math.min(...arr), max = Math.max(...arr, -min);
//   if (min === max) return arr;
//   const sort = (arr: number[], b: number, sign: boolean = false): number[] => {
//     if (!b || arr.length < 2) return arr;
//     const n = arr.length, l: number[] = [], r: number[] = [];
//     if (sign) {
//       for (let i = 0; i < n; (arr[i] < 0 ? l : r).push(arr[i++]));
//     } else {
//       for (let i = 0; i < n; (arr[i] & b ? r : l).push(arr[i++]));
//       b >>= 1;
//     }
//     return sort(l, b).concat(sort(r, b));
//   };
//   return sort(arr, 1 << (Math.floor(Math.log2(max)) + 1), min < 0);
// }
// function arrayRankTransform(arr: number[]): number[] {
//   const rank: Record<number, number> = {};
//   radixSort([...new Set(arr)]).forEach((v, i) => { rank[v] = i + 1 });
//   return arr.map((v) => rank[v]);
// };

// Radix sort in-place
const radixSort = (arr: number[]): number[] => {
  const sort = (l: number, r: number, b: number, s: boolean = false): void => {
    let st = [], p = 0;
    for (let i = l; i < r; i++) arr[i] & b ? st[p++] = arr[i] : p && (arr[i - p] = arr[i]);
    if (p) arr.splice(r - p, p, ...st);
    if (!(b >>= 1)) return;
    if (l < r - p) sort(l, r - p, b);
    if (r - p < r) sort(r - p, r, b);
  };
  const min = Math.min(...arr), max = Math.max(...arr, -min);
  if (min !== max) {
    let l = 0, r = arr.length, b = 1 << Math.log2(max);
    if (min < 0) {
      let st = [], p = 0;
      for (let i = l; i < r; i++) arr[i] < 0 ? p && (arr[i - p] = arr[i]) : st[p++] = arr[i];
      if (p) arr.splice(r - p, p, ...st);
      if (l < r - p) sort(l, r - p, b);
      if (r - p < r) sort(r - p, r, b);
    } else {
      sort(l, r, b);
    }
  }
  return arr;
}
function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  radixSort([...new Set(arr)]).forEach((v, i) => rank[v] = i + 1);
  return arr.map((v) => rank[v]);
};