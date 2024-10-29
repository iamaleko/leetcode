function maxMoves(grid: number[][]): number {
  const mx = grid[0].length - 1,
        my = grid.length - 1;
  for (let x = 1; x <= mx; x++) {
    let count = 0;
    for (let y = 0; y <= my; y++) {
      if (
        y > 0 && grid[y - 1][x - 1] > 0 && grid[y - 1][x - 1] < grid[y][x] ||
        grid[y][x - 1] > 0 && grid[y][x - 1] < grid[y][x] ||
        y < my && grid[y + 1][x - 1] > 0 && grid[y + 1][x - 1] < grid[y][x]
      ) {
        count++;
      } else {
        grid[y][x] = -1;
      }
    }  
    if (!count) return x - 1;
  }
  return mx;
};