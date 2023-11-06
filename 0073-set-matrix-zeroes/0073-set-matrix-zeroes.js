const setZeroes = (matrix) => {
  const set = new Set();
  for (const y in matrix) {
    for (const x in matrix[y]) {
      if (matrix[y][x] === 0) {
        set.add(y);
        set.add(-x);
      }
    }
  }
  for (const y in matrix) {
    for (const x in matrix[y]) {
      if (set.has(y) || set.has(-x)) {
        matrix[y][x] = 0
      }
    }
  }
};