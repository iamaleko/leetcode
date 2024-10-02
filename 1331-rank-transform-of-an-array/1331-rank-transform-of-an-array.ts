// function arrayRankTransform(arr: number[]): number[] {
//   const rank: Record<number, number> = {};
//   [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
//   return arr.map((v) => rank[v]);
// };

const radixSort = (arr: number[]): number[] => {
  const s = (arr: number[], p: number, sign: boolean = false): number[] => {
    let l: number[] = [], r: number[] = [];
    if (sign) {
      for (const num of arr) (num < 0 ? l : r).push(num);
    } else {
      for (const num of arr) (num & 1 << p ? r : l).push(num);
      p--;
    }
    return p > -1 ? (l.length > 1 ? s(l, p) : l).concat(r.length > 1 ? s(r, p) : r) : l.concat(r);
  };
  let min = Math.min(...arr), max = Math.max(...arr, -min), p = -1;
  while (max) max >>= 1, p++;
  return s(arr, p, min < 0);
}
function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  radixSort([...new Set(arr)]).forEach((v, i) => { rank[v] = i + 1 });
  return arr.map((v) => rank[v]);
};