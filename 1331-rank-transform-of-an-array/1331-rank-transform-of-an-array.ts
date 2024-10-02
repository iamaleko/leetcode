// function arrayRankTransform(arr: number[]): number[] {
//   const rank: Record<number, number> = {};
//   [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
//   return arr.map((v) => rank[v]);
// };

const radixSort = (arr: number[]): number[] => {
  const sort = (arr: number[], p: number, sign: boolean = false): number[] => {
    const n = arr.length, l: number[] = [], r: number[] = [];
    if (sign) {
      for (let i = 0; i < n; (arr[i] < 0 ? l : r).push(arr[i++]));
    } else {
      for (let i = 0; i < n; (arr[i] & 1 << p ? r : l).push(arr[i++]));
      if (p-- === 0) return l.concat(r);
    }
    return (l.length > 1 ? sort(l, p) : l).concat(r.length > 1 ? sort(r, p) : r);
  };
  let min = Math.min(...arr), max = Math.max(...arr, -min), p = -1;
  while (max) max >>= 1, p++;
  return sort(arr, p, min < 0);
}
function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  radixSort([...new Set(arr)]).forEach((v, i) => { rank[v] = i + 1 });
  return arr.map((v) => rank[v]);
};