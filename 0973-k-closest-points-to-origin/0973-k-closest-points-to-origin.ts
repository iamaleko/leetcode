function kClosest(points: number[][], k: number): number[][] {
  return points.map((v) => [v[0], v[1], v[0] ** 2 + v[1] ** 2])
         .sort((a, b) => a[2] - b[2])
         .slice(0, k)
         .map((v) => v.slice(0, 2));
};