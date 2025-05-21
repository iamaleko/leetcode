/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const set = new Set<string>();
  for (const y in matrix) {
    for (const x in matrix[y]) {
      if (matrix[y][x] === 0) {
        set.add(y);
        set.add('-'+x);
      }
    }
  }
  for (const y in matrix) {
    for (const x in matrix[y]) {
      if (set.has(y) || set.has('-'+x)) {
        matrix[y][x] = 0
      }
    }
  }
};