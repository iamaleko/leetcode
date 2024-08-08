enum Direction {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
};

function spiralMatrixIII(rows: number, cols: number, y: number, x: number): number[][] {
  const ans: number[][] = [],
      loops = Math.max(y + 1, x + 1, rows - y, cols - x),
      center_x = x,
      center_y = y;
  let loop = 1,
      direction: Direction = Direction.Right;
  while (loop <= loops) {
    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      ans.push([y, x]);
    }
    if (direction === Direction.Right && x === center_x + loop) { direction = Direction.Bottom; } else
    if (direction === Direction.Bottom && y === center_y + loop) { direction = Direction.Left; } else
    if (direction === Direction.Left && x === center_x - loop) { direction = Direction.Top; } else
    if (direction === Direction.Top && y === center_y - loop) { direction = Direction.Right; loop++; }
    if (direction === Direction.Top) { y--; } else
    if (direction === Direction.Right) { x++; } else
    if (direction === Direction.Bottom) { y++; } else
    if (direction === Direction.Left) { x--; }
  }
  return ans;
};