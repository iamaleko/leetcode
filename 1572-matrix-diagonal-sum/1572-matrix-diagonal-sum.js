/**
 * @param {number[][]} mat
 * @return {number}
 */
const diagonalSum = (mat) => {
  let x = 0, y = 0, sum = 0;
  while (x < mat.length) {
    sum += mat[y][x++];
    if (mat.length - x !== x - 1) {
      sum += mat[y][mat.length - x];
    }
    ++y;
  }
  return sum;
};