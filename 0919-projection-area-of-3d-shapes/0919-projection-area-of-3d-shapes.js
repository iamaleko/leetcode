/**
 * @param {number[][]} grid
 * @return {number}
 */
const projectionArea = (grid) => {
  let zs = 0, xs = 0, ys = 0;
  for (const x in grid) {
    let ym = 0, xm = 0;
    for (const y in grid[x]) {
      if (grid[x][y]) ++zs;
      if (grid[x][y] > ym) ym = grid[x][y]; 
      if (grid[y][x] > xm) xm = grid[y][x]; 
    }
    ys += ym;
    xs += xm;
  }
  return zs + ys + xs;
};