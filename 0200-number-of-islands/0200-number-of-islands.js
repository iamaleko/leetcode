/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  const dfs = (y, x) => {
    grid[y][x] = '2';
    if (grid[y][x - 1] === '1') dfs(y, x - 1);
    if (grid[y][x + 1] === '1') dfs(y, x + 1);
    if (grid[y - 1] && grid[y - 1][x] === '1') dfs(y - 1, x);
    if (grid[y + 1] && grid[y + 1][x] === '1') dfs(y + 1, x);
  }
  let count = 0;
  for (const y in grid) {
    for (const x in grid[y]) {
      if (grid[y][x]!=='1') continue;
      dfs(+y, +x);
      ++count;
    }
  }
  return count;
};