// function arrayRankTransform(arr: number[]): number[] {
//   const rank: Record<number, number> = {};
//   [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
//   return arr.map((v) => rank[v]);
// };

const radixSort = (arr: number[]): number[] => {
  let min = Math.min(...arr), max = Math.max(...arr, -min), p = -1;
  if (min === max) return arr;
  while (max) max >>= 1, p++;
  const sort = (arr: number[], b: number, sign: boolean = false): number[] => {
    if (!b || arr.length < 2) return arr;
    const n = arr.length, l: number[] = [], r: number[] = [];
    if (sign) {
      for (let i = 0; i < n; (arr[i] < 0 ? l : r).push(arr[i++]));
    } else {
      for (let i = 0; i < n; (arr[i] & b ? r : l).push(arr[i++]));
      b >>= 1;
    }
    return sort(l, b).concat(sort(r, b));
  };
  return sort(arr, 1 << p, min < 0);
}
function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  radixSort([...new Set(arr)]).forEach((v, i) => { rank[v] = i + 1 });
  return arr.map((v) => rank[v]);
};