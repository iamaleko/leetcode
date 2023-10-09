/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = (grid) => {
  const mem = {};
  const increase = (y,x) => {
    if (mem[-y - 1] === undefined) {
      let max = 0;
      for (const x in grid[y]) if (max < grid[y][x]) max = grid[y][x];
      mem[-y - 1] = max;
    }
    if (mem[x + 1] === undefined) {
      let max = 0;
      for (const y in grid) if (max < grid[y][x]) max = grid[y][x];
      mem[x + 1] = max;
    }
    return Math.min(mem[x + 1], mem[-y - 1]);
  }
  let sum = 0;
  for (const y in grid) {
    for (const x in grid[y]) {
      sum += Math.max(0, increase(y,x) - grid[y][x]);
    }
  }
  return sum;
};