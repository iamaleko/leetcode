// function arrayRankTransform(arr: number[]): number[] {
//   const rank: Record<number, number> = {};
//   [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
//   return arr.map((v) => rank[v]);
// };

const radixSort = (arr: number[]): number[] => {
  const s = (arr: number[], p: number): number[] => {
    let l: number[] = [], r: number[] = [];
    for (const num of arr) (num & 1 << p ? r : l).push(num);
    return p-- ? (l.length > 1 ? s(l, p) : l).concat(r.length > 1 ? s(r, p) : r) : l.concat(r);
  };
  let min = Math.min(...arr),
      max = Math.max(...arr, -min),
      l: number[] = [],
      r: number[] = [],
      p = -1;
  while (max) max >>= 1, p++;
  for (const num of arr) (num < 0 ? l : r).push(num);
  return (l.length > 1 ? s(l, p) : l).concat(r.length > 1 ? s(r, p) : r);
}

function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  // [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
  radixSort([...new Set(arr)]).forEach((v, i) => { rank[v] = i + 1 });
  return arr.map((v) => rank[v]);
};