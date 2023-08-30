/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  let qx, qy, qr, px, py;
  for (const i in queries) {
    [qx,qy,qr] = queries[i];
    queries[i] = 0;
    for ([px,py] of points) {
      if ((qx - px) * (qx - px) + (qy - py) * (qy - py) <= qr * qr) ++queries[i];
    }
  }
  return queries;
};