/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = (grid) => {
  let p = 0;
  for (const y in grid) for (const x in grid[y]) {
    if (!grid[y][x]) continue;
    if (!grid[+y-1] || !grid[+y-1][x]) ++p;
    if (!grid[+y+1] || !grid[+y+1][x]) ++p;
    if (!grid[y][+x-1]) ++p;
    if (!grid[y][+x+1]) ++p;
  }
  return p;
};