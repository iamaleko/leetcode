const findMinArrowShots = (points) => {
  if (!points.length) return 0;
  points.sort((a, b) => a[0] - b[0]);
  let arrows = 1, r = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > r) {
      r = points[i][1];
      arrows++;
    } else if (points[i][1] < r) {
      r = points[i][1];
    }
  }
  return arrows;
};