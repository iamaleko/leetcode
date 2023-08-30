/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  for (const i in queries) {
    const [qx,qy,qr] = queries[i];
    queries[i] = 0;
    for (const j in points) {
      if ((qx - points[j][0]) * (qx - points[j][0]) + (qy - points[j][1]) * (qy - points[j][1]) <= qr * qr) ++queries[i];
    }
  }
  return queries;
};