function kClosest(points: number[][], k: number): number[][] {
  const dist: [number, number][] = [];
  for (let i = 0; i < points.length; i++) dist.push([i, Math.sqrt(points[i][0] ** 2 + points[i][1] ** 2)]);
  dist.sort((a, b) => a[1] - b[1]);
  return dist.slice(0, k).map(([i]) => points[i]);
};