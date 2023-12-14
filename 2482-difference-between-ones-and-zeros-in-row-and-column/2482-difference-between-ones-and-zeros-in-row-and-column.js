const onesMinusZeros = (grid) => {
  const onesRow = new Array(grid.length).fill(0);
  const onesCol = new Array(grid[0].length).fill(0);
  const zerosRow = new Array(grid.length).fill(0);
  const zerosCol = new Array(grid[0].length).fill(0);
  
  for (const y in grid) {
    for (const x in grid[y]) {
      if (grid[y][x]) {
        ++onesRow[y]
        ++onesCol[x]
      } else {
        ++zerosRow[y]
        ++zerosCol[x]
      }
    }
  }
  
  const diff = [];

  for (const y in grid) {
    diff[y] = [];
    for (const x in grid[y]) {
      diff[y][x] = onesRow[y] + onesCol[x] - zerosRow[y] - zerosCol[x]
    }
  }
  
  return diff;
};