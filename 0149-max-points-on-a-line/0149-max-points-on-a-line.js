const maxPoints = (points) => {
  if (points.length === 1) return 1;
  let max = 0;
  points.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  for (let i = 0; i < points.length; i++) {
    const map = {};
    for (let j = i + 1; j < points.length; j++) {
      if (i === j) continue;
      const diff = (points[i][0] - points[j][0]) / (points[i][1] - points[j][1]);
      map.hasOwnProperty(diff) ? map[diff]++ : map[diff] = 2;
      if (max < map[diff]) max = map[diff];
    }
  }
  return max;
};