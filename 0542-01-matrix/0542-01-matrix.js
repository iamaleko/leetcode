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

// const updateMatrix = (mat) => {
//   const out = Array.from(Array(mat.length), () => []);
//   const queue = [];

//   for (const y in mat) {
//     for (const x in mat[y]) {
//       if (mat[y][x] === 0) queue.push([+x, +y, 0]);
//     }
//   }

//   while (queue.length) {
//     const [x, y, s] = queue.shift();
//     if (out[y][x] === undefined) {
//       out[y][x] = s;
//       if (x > 0)                 queue.push([x - 1, y, s + 1])
//       if (x < mat[y].length - 1) queue.push([x + 1, y, s + 1])
//       if (y > 0)                 queue.push([x, y - 1, s + 1])
//       if (y < mat.length - 1)    queue.push([x, y + 1, s + 1])
//     }
//   }

//   return out;
// };

// const updateMatrix = (mat) => {
//   const out = Array.from(Array(mat.length), () => []);
//   const queue = [];

//   for (const y in mat) {
//     for (const x in mat[y]) {
//       if (mat[y][x] === 0) {
//         out[y][x] = 0;
//         queue.push([+x, +y]);
//       } else {
//         out[y][x] = Number.MAX_VALUE;
//       }
//     }
//   }

//   while (queue.length) {
//     const [x, y] = queue.shift();

//     if (x > 0 && out[y][x - 1] > out[y][x]) {
//       out[y][x - 1] = out[y][x] + 1;
//       queue.push([x - 1, y]);
//     }

//     if (y > 0 && out[y - 1][x] > out[y][x]) {
//       out[y - 1][x] = out[y][x] + 1;
//       queue.push([x, y - 1]);
//     }

//     if (x < mat[y].length - 1 && out[y][x + 1] > out[y][x]) {
//       out[y][x + 1] = out[y][x] + 1;
//       queue.push([x + 1, y]);
//     }

//     if (y < mat.length - 1 && out[y + 1][x] > out[y][x]) {
//       out[y + 1][x] = out[y][x] + 1;
//       queue.push([x, y + 1]);
//     }
//   }

//   return out;
// };

const updateMatrix = (mat) => {
  const queuex = [];
  const queuey = [];
  const my = mat.length - 1;
  const mx = mat[0].length - 1;
  const max = (my + 1) * (mx + 1);

  for (const y in mat) {
    for (const x in mat[y]) {
      if (mat[y][x] === 0) {
        queuex.push(+x);
        queuey.push(+y);
      } else {
        mat[y][x] = max;
      }
    }
  }

  while (queuex.length) {
    const x = queuex.shift();
    const y = queuey.shift();

    if (x > 0 && mat[y][x - 1] > mat[y][x]) {
      mat[y][x - 1] = mat[y][x] + 1;
      queuex.push(x - 1);
      queuey.push(y);
    }

    if (y > 0 && mat[y - 1][x] > mat[y][x]) {
      mat[y - 1][x] = mat[y][x] + 1;
      queuex.push(x);
      queuey.push(y - 1);
    }

    if (x < mx && mat[y][x + 1] > mat[y][x]) {
      mat[y][x + 1] = mat[y][x] + 1;
      queuex.push(x + 1);
      queuey.push(y);
    }

    if (y < my && mat[y + 1][x] > mat[y][x]) {
      mat[y + 1][x] = mat[y][x] + 1;
      queuex.push(x);
      queuey.push(y + 1);
    }
  }

  return mat;
};