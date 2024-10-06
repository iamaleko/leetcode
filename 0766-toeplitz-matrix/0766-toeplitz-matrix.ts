function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      if (x && y && matrix[y][x] !== matrix[y - 1][x - 1]) return false;
    }
  }
  return true;
};