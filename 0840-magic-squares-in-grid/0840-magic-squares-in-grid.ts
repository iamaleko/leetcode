function numMagicSquaresInside(grid: number[][]): number {
  let ans = 0;
  for (let y = 1; y < grid.length - 1; y++) {
    main: for (let x = 1; x < grid[y].length - 1; x++) {
      const sum = grid[y - 1][x - 1] + grid[y][x] + grid[y + 1][x + 1];
      if (sum !== grid[y + 1][x - 1] + grid[y][x] + grid[y - 1][x + 1]) continue;
      for (let row = y - 1; row <= y + 1; row++) if (sum !== grid[row][x - 1] + grid[row][x] + grid[row][x + 1]) continue main;
      for (let col = x - 1; col <= x + 1; col++) if (sum !== grid[y - 1][col] + grid[y][col] + grid[y + 1][col]) continue main;
      if (Math.max(
        grid[y - 1][x - 1], grid[y - 1][x], grid[y - 1][x + 1],
        grid[y][x - 1], grid[y][x], grid[y][x + 1],
        grid[y + 1][x - 1], grid[y + 1][x], grid[y + 1][x + 1]
      ) > 9) continue;
      if (Math.min(
        grid[y - 1][x - 1], grid[y - 1][x], grid[y - 1][x + 1],
        grid[y][x - 1], grid[y][x], grid[y][x + 1],
        grid[y + 1][x - 1], grid[y + 1][x], grid[y + 1][x + 1]
      ) < 1) continue;
      if (new Set([
        grid[y - 1][x - 1], grid[y - 1][x], grid[y - 1][x + 1],
        grid[y][x - 1], grid[y][x], grid[y][x + 1],
        grid[y + 1][x - 1], grid[y + 1][x], grid[y + 1][x + 1]
      ]).size < 9) continue;
      ans++;
    }
  }
  return ans;
};