const minFallingPathSum = (matrix) => {
  let l = matrix[0].length - 1, y = 1, x, a = matrix[0];
  for (; y < matrix.length; a = matrix[y++]) {
    matrix[y][0] += Math.min(a[0], a[1]);
    for (x = 1; x < l; matrix[y][x] += Math.min(a[x], a[x - 1], a[++x]));
    matrix[y][l] += Math.min(a[l], a[l - 1]);
  }
  return Math.min(...a);
};

