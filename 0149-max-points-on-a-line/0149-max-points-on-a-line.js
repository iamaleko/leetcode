const maxPoints = (points) => {
  if (points.length === 1) return 1;
  let max = 0;
  const fn = (x1, y1, x2, y2) => (x1 - x2)/(y1 - y2);
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  for (let i = 0; i < points.length; i++) {
    const map = {};
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const diff = fn(points[i][0], points[i][1], points[j][0], points[j][1]);
      if (!map.hasOwnProperty(diff)) map[diff] = 1;
      map[diff]++;
      if (max < map[diff]) max = map[diff];
    }
  }
  return max;
};