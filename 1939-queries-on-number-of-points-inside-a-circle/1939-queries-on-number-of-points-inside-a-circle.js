/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  const answers = [];
  let count;
  for (const [qx,qy,qr] of queries) {
    count = 0;
    for (const [px,py] of points) {
      if ((qx - px) * (qx - px) + (qy - py) * (qy - py) <= qr * qr) ++count;
    }
    answers.push(count)
  }
  return answers;
};