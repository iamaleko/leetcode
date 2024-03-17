const gameOfLife = (board) => {
  const cell = (y, x) => (board[y]?.[x] || 0) & 1;
  // update
  for (let y = 0; y < board.length; y++) for (let x = 0; x < board[0].length; x++) {
    const ln = cell(y, x - 1) + // left
               cell(y, x + 1) + // right
               cell(y - 1, x) + // top
               cell(y + 1, x) + // bottom
               cell(y - 1, x - 1) + // top left
               cell(y + 1, x + 1) + // bottom right
               cell(y - 1, x + 1) + // top right
               cell(y + 1, x - 1);  // bottom left
    if (cell(y, x) ? ln === 2 || ln === 3 : ln === 3) board[y][x] |= 2;
  }
  // shift
  for (let y = 0; y < board.length; y++) for (let x = 0; x < board[0].length; x++) board[y][x] >>= 1;
  return board;
};