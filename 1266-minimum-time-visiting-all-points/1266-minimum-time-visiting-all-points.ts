function minTimeToVisitAllPoints(points: [number, number][]): number {
  const dist = (a: [number, number], b: [number, number]): number => {
    const x = Math.abs(a[0] - b[0]),
          y = Math.abs(a[1] - b[1])
    return Math.abs(x - y) + Math.min(x, y);
  }
  let ans = 0;
  for (let i = 1; i < points.length; i++) ans += dist(points[i - 1], points[i]);
  return ans;
};