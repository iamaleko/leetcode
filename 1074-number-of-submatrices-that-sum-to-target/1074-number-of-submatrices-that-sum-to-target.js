const numSubmatrixSumTarget = (matrix, target) => {
  const w = matrix[0].length;
  const h = matrix.length;

  // convert to prefix sum matrix
  for (let y = 0; y < h; ++y) for (let x = 1; x < w; ++x) {
    matrix[y][x] += matrix[y][x-1];
  }
  for (let y = 1; y < h; ++y) for (let x = 0; x < w; ++x) {
    matrix[y][x] += matrix[y-1][x];
  }

  // retrieve submatrix sum
  const sum = (y,x,w,h) => {
    return matrix[y][x] - (y - h >= 0 ? matrix[y - h][x] : 0) - (x - w >= 0 ? matrix[y][x - w] - (y - h >= 0 ? matrix[y - h][x - w] : 0) : 0)
  }

  // sliding window
  let res = 0;
  for (let ww = 1; ww <= w; ++ww) {
    for (let wh = 1; wh <= h; ++wh) {
      for (let x = ww - 1; x < w; ++x) {
        for (let y = wh - 1; y < h; ++y) {
          if (sum(y,x,ww,wh) === target) ++res;
        }  
      }
    }
  }

  return res;
};

// 1 2 3
// 4 5 6
// 7 8 9

// 1  3  6
// 4  9  15
// 7  15 24

// 1  3  6
// 5  12 21
// 13 27 45

// 45 - 21 - (27 - 12)