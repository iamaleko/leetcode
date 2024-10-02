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
  const sort = (l: number, r: number, b: number, sign: boolean = false): void => {
    if (l < r && b) {
      const stash = [];
      let p = l;
      for (let i = l; i <= r; i++) {
        if (sign ? arr[i] >= 0 : arr[i] & b) {
          stash.push(arr[i]);
        } else {
          if (i !== p) arr[p] = arr[i];
          p++;
        }
      }
      if (!sign) b >>= 1;
      if (p <= r) arr.splice(p, stash.length, ...stash);
      sort(l, p - 1, b);
      sort(p, r, b);
    }
  };
  if (min !== max) sort(0, arr.length - 1, 1 << Math.log2(max), min < 0);
}
function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {},
        uniq = [...new Set(arr)];
  radixSort(uniq);
  uniq.forEach((v, i) => rank[v] = i + 1);
  return arr.map((v) => rank[v]);
};