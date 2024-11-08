function kClosest(points: number[][], k: number): number[][] {
  return points.map(([x, y]) => [x, y, x ** 2 + y ** 2])
         .sort(([,,a], [,,b]) => a - b)
         .slice(0, k)
         .map(([x, y]) => [x, y]);
};