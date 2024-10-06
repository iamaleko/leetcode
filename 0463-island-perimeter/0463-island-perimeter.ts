function islandPerimeter(grid: number[][]): number {
  let ans = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (!grid[y][x]) continue;
      if (!y || !grid[y-1][x]) ans++;
      if (!x || !grid[y][x-1]) ans++;
      if (y === grid.length - 1 || !grid[y + 1][x]) ans++;
      if (x === grid[0].length - 1 || !grid[y][x + 1]) ans++;
    }
  }
  return ans;
};