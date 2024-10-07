function tictactoe(moves: number[][]): string {
  const grid = new Array(3).fill(0).map(() => new Array(3).fill(9));
  let player = 0;
  for (const [y, x] of moves) grid[y][x] = (player ^= 1);
  const diags = [
    grid[0][0] + grid[1][1] + grid[2][2],
    grid[0][2] + grid[1][1] + grid[2][0],
    grid[0][0] + grid[0][1] + grid[0][2],
    grid[1][0] + grid[1][1] + grid[1][2],
    grid[2][0] + grid[2][1] + grid[2][2],
    grid[0][0] + grid[1][0] + grid[2][0],
    grid[0][1] + grid[1][1] + grid[2][1],
    grid[0][2] + grid[1][2] + grid[2][2],
  ];
  for (const sum of diags) {
    if (sum === 3) return 'A';
    if (sum === 0) return 'B';
  }
  return moves.length === 9 ? 'Draw' : 'Pending';
};