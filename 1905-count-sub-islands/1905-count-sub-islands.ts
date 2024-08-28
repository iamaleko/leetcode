function countSubIslands(grid1: number[][], grid2: number[][]): number {
  const mx = grid1[0].length - 1,
        my = grid1.length - 1;

  const traverse = (y, x, grid, mark): void => {
    mark(y, x);
    if (x > 0 && grid[y][x - 1] === 1) traverse(y, x - 1, grid, mark);
    if (y > 0 && grid[y - 1][x] === 1) traverse(y - 1, x, grid, mark);
    if (x < mx && grid[y][x + 1] === 1) traverse(y, x + 1, grid, mark);
    if (y < my && grid[y + 1][x] === 1) traverse(y + 1, x, grid, mark);
  }

  // find islands on grid1
  let id = 1;
  for (let y = 0; y <= my; y++) {
    for (let x = 0; x <= mx; x++) {
      if (grid1[y][x] !== 1) continue;
      id++;
      traverse(y, x, grid1, (y, x) => {
        grid1[y][x] = id;
      });
    }
  }

  // count sub-islands on grid2
  let count = 0;
  for (let y = 0; y <= my; y++) {
    for (let x = 0; x <= mx; x++) {
      if (grid2[y][x] !== 1 || grid1[y][x] === 0) continue;
      let id = grid1[y][x],
          match = true;
      traverse(y, x, grid2, (y, x) => {
        grid2[y][x] = id;
        if (id !== grid1[y][x]) match = false;
      })
      if (match) count++;
    }
  }

  return count;
};