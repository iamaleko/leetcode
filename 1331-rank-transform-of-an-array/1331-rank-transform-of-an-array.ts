function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  [...new Set(arr)].sort((a, b) => a - b).forEach((v, i) => { rank[v] = i + 1 });
  return arr.map((v) => rank[v]);
};