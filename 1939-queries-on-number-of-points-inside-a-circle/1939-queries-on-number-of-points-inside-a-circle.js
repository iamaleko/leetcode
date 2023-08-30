/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
const countPoints = (points, queries) => {
  const answers = [];
  const map = new Map();
  const cantor = (a,b) => (a + b) * (a + b + 1) / 2 + b;
  const getKey = (px,py,qx,qy,qr) => cantor(cantor(cantor(px,py), cantor(qx, qy)), qr);
  for (const i in queries) {
    const [qx,qy,qr] = queries[i];
    answers[i] = 0;
    for (const [px,py] of points) {
      const key = getKey(px,py,qx,qy,qr);
      let cache = map.get(key);
      if (cache === undefined) {
        cache = py < qy - qr || py > qy + qr || px < qx - qr || px > qx + qr ? false : Math.sqrt(Math.pow(qx - px, 2) + Math.pow(qy - py, 2)) <= qr;
        map.set(key, cache);
      }
      if (cache) ++answers[i]
    }
  }
  return answers;
};