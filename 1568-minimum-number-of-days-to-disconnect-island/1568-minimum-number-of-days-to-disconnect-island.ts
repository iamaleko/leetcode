function minDays(grid: number[][]): number {
  const X = grid[0].length - 1, Y = grid.length - 1, total = Y * X + Y + X + 1;
  const dfs = (y, x, v = grid[y][x]): number => {
    let count = 1;
    grid[y][x] = 0;
    if (y > 0 && grid[y - 1][x] && grid[y - 1][x] <= v) count += dfs(y - 1, x, v);
    if (y < Y && grid[y + 1][x] && grid[y + 1][x] <= v) count += dfs(y + 1, x, v);
    if (x > 0 && grid[y][x - 1] && grid[y][x - 1] <= v) count += dfs(y, x - 1, v);
    if (x < X && grid[y][x + 1] && grid[y][x + 1] <= v) count += dfs(y, x + 1, v);
    grid[y][x] = v + 1;
    return count;
  }

  // count land cells and check if already disconnected
  let land = 0;
  for (let y = 0; y <= Y; y++) {
    for (let x = 0; x <= X; x++) {
      if (grid[y][x] === 1) {
        if (land) return 0; // already disconnected
        land = dfs(y, x);
      }
    }
  }

  // only sea
  if (!land) return 0;

  // small island
  if (land <= 2) return land;

  // only land
  if (!Y || !X) return 1;
  
  // need to find disconnecting peace of land
  land--;
  for (let y = 0; y <= Y; y++) {
    for (let x = 0; x <= X; x++) {
      if (grid[y][x]) {
        const v = grid[y][x];
        grid[y][x] = 0;
        if (
          // tl
          (x < X && y < Y && grid[y + 1][x] && grid[y][x + 1] && !grid[y + 1][x + 1] && dfs(y, x + 1) !== land) ||
          // tr
          (x > 0 && y < Y && grid[y + 1][x] && grid[y][x - 1] && !grid[y + 1][x - 1] && dfs(y, x - 1) !== land) ||
          // bl
          (x < X && y > 0 && grid[y - 1][x] && grid[y][x + 1] && !grid[y - 1][x + 1] && dfs(y, x + 1) !== land) ||
          // br
          (x > 0 && y > 0 && grid[y - 1][x] && grid[y][x - 1] && !grid[y - 1][x - 1] && dfs(y, x - 1) !== land)
        ) {
          return 1;
        }
        grid[y][x] = v;
      }
    }
  }

  return 2;
};
// 11011
// 111*1
// 11011
// 11111