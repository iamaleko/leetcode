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
const radixSort = (arr: number[]): void => {
  const min = Math.min(...arr), max = Math.max(...arr, -min);
  if (min !== max) (function sort(l: number, r: number, b: number, s: boolean = false): void {
    let st = [], p = 0, i = l - 1;
    if (s) {
      while (++i < r) arr[i] < 0 ? p && (arr[i - p] = arr[i]) : st[p++] = arr[i];
    } else {
      while (++i < r) arr[i] & b ? st[p++] = arr[i] : p && (arr[i - p] = arr[i]);
      b >>= 1;
    }
    for (i = 0; i < p; ) arr[r - p + i] = st[i++];
    if (!b) return;
    if (r - p - l > 1) sort(l, r - p, b);
    if (p > 1) sort(r - p, r, b);
  })(0, arr.length, 1 << Math.log2(max), min < 0);
}
function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {}, srt = arr.slice();
  radixSort(srt);
  for (let i = 0, p = 1, l: number; i < srt.length; i++) if (l !== srt[i]) rank[l = srt[i]] = p++;
  for (let i = 0; i < arr.length; i++) arr[i] = rank[arr[i]];
  return arr;
};