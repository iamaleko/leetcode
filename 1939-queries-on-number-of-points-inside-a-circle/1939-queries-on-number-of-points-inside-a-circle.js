/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  const answers = [];
  const map = {};
  for (const i in queries) {
    const [qx,qy,qr] = queries[i];
    answers[i] = 0;
    for (const [px,py] of points) {
      let test = map[px];
      let cache;
      if (cache === undefined) {
        cache = py < qy - qr || py > qy + qr || px < qx - qr || px > qx + qr ? false : Math.sqrt(Math.pow(qx - px, 2) + Math.pow(qy - py, 2)) <= qr;
        // map[px+','+py+','+qx+','+qy+','+qr] = cache;
      }
      if (cache) ++answers[i]
    }
  }
  return answers;
};