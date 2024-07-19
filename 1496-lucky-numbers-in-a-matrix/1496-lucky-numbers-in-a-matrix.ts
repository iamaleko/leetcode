function luckyNumbers(matrix: number[][]): number[] {
  for (let x = 0; x < matrix[0].length; x++) {
    let max: number = -Infinity,
        max_y: number = 0;
    for (let y = 0; y < matrix.length; y++) {
      if (matrix[y][x] > max) {
        max = matrix[y][x];
        max_y = y;
      }
    }

    let min: number = Infinity,
        min_x: number = 0;
    for (let _x = 0; _x < matrix[0].length; _x++) {
      if (matrix[max_y][_x] < min) {
        min = matrix[max_y][_x];
        min_x = _x;
      }
    }

    if (min_x === x) {
      return [matrix[max_y][min_x]];
    }
  }
  return [];
};