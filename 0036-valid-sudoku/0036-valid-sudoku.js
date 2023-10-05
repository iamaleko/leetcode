/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const set = new Set();
  for (const row in board) {
    for (const col in board[row]) {
      // const val = board[row][col];
      if (board[row][col] !== '.') {
        const box = (row / 3 | 0) * 3 + (col / 3 | 0) + 1;
        if (
          set.has(row + 1 << 4 | board[row][col]) ||
          set.has(col + 1 << 8 | board[row][col]) ||
          set.has(box << 12 | board[row][col])
        ) return false;
        set.add(row + 1 << 4 | board[row][col]);
        set.add(col + 1 << 8 | board[row][col]);
        set.add(box << 12 | board[row][col]);
      }
    } 
  } 
  return true;
};