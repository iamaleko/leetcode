/**
 * @param {number[][]} points
 * @return {number}
 */
const minTimeToVisitAllPoints = (points) => {
  let sum = 0;
  for (let i = 1; i < points.length; ++i) {
    let [x, y] = points[i - 1];
    let [fx, fy] = points[i];
    while (x !== fx || y !== fy) {
      if (x !== fx) x = x > fx ? x - 1 : x + 1;
      if (y !== fy) y = y > fy ? y - 1 : y + 1;
      ++sum;
    }
  }
  return sum;
};