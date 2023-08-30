/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  let count;
  for (const i in queries) {
    count = 0;
    const [qx,qy,qr] = queries[i];
    for (const [px,py] of points) {
      if ((qx - px) * (qx - px) + (qy - py) * (qy - py) <= qr * qr) ++count;
    }
    queries[i] = count;
  }
  return queries;
};