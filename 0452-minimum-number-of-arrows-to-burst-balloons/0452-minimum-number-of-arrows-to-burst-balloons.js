const findMinArrowShots = (points) => {
  if (!points.length) return 0;
  points.sort((a, b) => a[0] - b[0]);
  let arrows = 1, r = points[0][1];
  for (const point of points) {
    if (point[0] > r) {
      r = point[1];
      arrows++;
    } else if (point[1] < r) {
      r = point[1];
    }
  }
  return arrows;
};