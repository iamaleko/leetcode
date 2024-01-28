const numSubmatrixSumTarget = (matrix, target) => {
  const w = matrix[0].length;
  const h = matrix.length;
  let res = 0, x, y, ww, wh;

  // convert to prefix sum matrix
  for (y = 0; y < h; ++y) for (x = 1; x < w; ++x) matrix[y][x] += matrix[y][x - 1];
  for (y = 1; y < h; ++y) for (x = 0; x < w; ++x) matrix[y][x] += matrix[y - 1][x];

  // sliding window
  for (ww = 1; ww <= w; ++ww) for (wh = 1; wh <= h; ++wh) for (x = ww - 1; x < w; ++x) for (y = wh - 1; y < h; ++y) {
    if (
      matrix[y][x] -
      (y >= wh ? matrix[y - wh][x] : 0) -
      (x >= ww ? matrix[y][x - ww] - (y >= wh ? matrix[y - wh][x - ww] : 0) : 0) ===
      target
    ) ++res;
  }

  return res;
};