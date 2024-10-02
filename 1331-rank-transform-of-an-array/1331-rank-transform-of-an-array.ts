function arrayRankTransform(arr: number[]): number[] {
  const rank: Record<number, number> = {};
  let i = 1;
  for (const num of [...new Set(arr)].sort((a, b) => a - b)) rank[num] = i++;
  return arr.map((e) => rank[e]);
};