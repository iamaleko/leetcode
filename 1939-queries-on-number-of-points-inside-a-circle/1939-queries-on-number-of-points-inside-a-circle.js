/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  const answers = [];
  for (const i in queries) {
    const [qx,qy,qr] = queries[i];
    answers[i] = 0;
    for (const [px,py] of points) {
      if ((qx - px) * (qx - px) + (qy - py) * (qy - py) <= qr * qr) ++answers[i];
    }
  }
  return answers;
};