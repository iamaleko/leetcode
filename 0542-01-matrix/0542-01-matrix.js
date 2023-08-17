// const updateMatrix = (mat) => {
//   const out = Array.from(Array(mat.length), () => []);
//   const pair = (x, y) => (x + y) * (x + y + 1) / 2 + x;
//   const bfs = (x, y) => {
//     const queue = [[x,y,0]];
//     const set = new Set();
//     while (queue.length) {
//       const [x, y, s] = queue.shift();
//       if (set.has(pair(x, y))) continue;
//       set.add(pair(x, y));
//       if (mat[y][x] === 0) return s;
//       if (x > 0)                 queue.push([x - 1, y, s + 1])
//       if (x < mat[y].length - 1) queue.push([x + 1, y, s + 1])
//       if (y > 0)                 queue.push([x, y - 1, s + 1])
//       if (y < mat.length - 1)    queue.push([x, y + 1, s + 1])
//     }
//   };

//   for (const y in mat) {
//     for (const x in mat[y]) {
//       out[y][x] = bfs(+x, +y);
//     }
//   }

//   return out;
// };

const updateMatrix = (mat) => {
  const out = Array.from(Array(mat.length), () => []);
  const queue = [];

  for (const y in mat) {
    for (const x in mat[y]) {
      if (mat[y][x] === 0) queue.push([+x, +y, 0]);
    }
  }

  while (queue.length) {
    const [x, y, s] = queue.shift();
    if (out[y][x] === undefined || out[y][x] > s) {
      out[y][x] = s;
      if (x > 0)                 queue.push([x - 1, y, s + 1])
      if (x < mat[y].length - 1) queue.push([x + 1, y, s + 1])
      if (y > 0)                 queue.push([x, y - 1, s + 1])
      if (y < mat.length - 1)    queue.push([x, y + 1, s + 1])
    }
  }

  return out;
};