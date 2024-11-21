function countUnguarded(m: number, n: number, guards: number[][], walls: number[][]): number {
  enum Mask {
    Empty = 0,
    Wall = 1 << 0,
    GuardedVertical = 1 << 1,
    GuardedHorizontal = 1 << 2,
  }
  const grid: number[][] = new Array(m)
                           .fill(Mask.Empty)
                           .map(() => new Array(n).fill(Mask.Empty));
  for (const [y, x] of walls) grid[y][x] = Mask.Wall;
  const top = (y: number, x: number) => {
    if (--y >= 0 && (grid[y][x] & (Mask.GuardedVertical | Mask.Wall)) === 0) {
      grid[y][x] |= Mask.GuardedVertical;
      top(y, x);
    }
  }
  const bottom = (y: number, x: number) => {
    if (++y < m && (grid[y][x] & (Mask.GuardedVertical | Mask.Wall)) === 0) {
      grid[y][x] |= Mask.GuardedVertical;
      bottom(y, x);
    }
  }
  const left = (y: number, x: number) => {
    if (--x >= 0 && (grid[y][x] & (Mask.GuardedHorizontal | Mask.Wall)) === 0) {
      grid[y][x] |= Mask.GuardedHorizontal;
      left(y, x);
    }
  }
  const right = (y: number, x: number) => {
    if (++x < n && (grid[y][x] & (Mask.GuardedHorizontal | Mask.Wall)) === 0) {
      grid[y][x] |= Mask.GuardedHorizontal;
      right(y, x);
    }
  }
  for (const [y,x] of guards) {
    grid[y][x] = Mask.GuardedVertical | Mask.GuardedHorizontal;
    if (y > 0 && (grid[y - 1][x] & (Mask.GuardedVertical | Mask.Wall)) === 0) top(y, x);
    if (x + 1 < n && (grid[y][x + 1] & (Mask.GuardedHorizontal | Mask.Wall)) === 0) right(y, x);
    if (y + 1 < m && (grid[y + 1][x] & (Mask.GuardedVertical | Mask.Wall)) === 0) bottom(y, x);
    if (x > 0 && (grid[y][x - 1] & (Mask.GuardedHorizontal | Mask.Wall)) === 0) left(y, x);
  }
  let ans = 0;
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === Mask.Empty) ans++;
    }
  }
  return ans;
};