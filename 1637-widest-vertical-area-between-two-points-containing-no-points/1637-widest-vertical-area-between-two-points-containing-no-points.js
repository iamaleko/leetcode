/**
 * @param {number[][]} points
 * @return {number}
 */
const maxWidthOfVerticalArea = (points) => {
  if (points.length < 2) return 0;
  points.sort((a, b) => a[0] - b[0]);
  let max = 0;
  for (let i = 1; i < points.length; ++i) {
    if (max < points[i][0] - points[i - 1][0]) max = points[i][0] - points[i - 1][0];
  } 
  return max;
};