/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  let qx, qy, qr;
  for (const i in queries) {
    [qx,qy,qr] = queries[i];
    queries[i] = 0;
    for (const [px,py] of points) {
      if ((qx - px) * (qx - px) + (qy - py) * (qy - py) <= qr * qr) ++queries[i];
    }
  }
  return queries;
};