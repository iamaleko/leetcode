/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
  let min = 0, max = matrix.length - 1;
  for (const y in matrix) {
    if ((y > matrix.length - 1) / 2) break;
    for (let x = min; x < max; ++x) {
      [
        matrix[x][max],
        matrix[max][matrix.length - x - 1],
        matrix[matrix.length - x - 1][min],
        matrix[y][x],
      ] = [
        matrix[y][x],
        matrix[x][max],
        matrix[max][matrix.length - x - 1],
        matrix[matrix.length - x - 1][min],
      ];
    }
    ++min;
    --max;
  }
  return matrix;
};