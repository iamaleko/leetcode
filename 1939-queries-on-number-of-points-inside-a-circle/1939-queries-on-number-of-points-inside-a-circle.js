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
      if (Math.pow(qx - px, 2) + Math.pow(qy - py, 2) <= qr*qr) ++answers[i];
    }
  }
  return answers;
};