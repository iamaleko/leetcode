/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const set = new Set();
  for (const row in board) {
    for (const col in board[row]) {
      const val = board[row][col];
      if (val !== '.') {
        const box = Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1;
        if (
          val < 1 || val > 9 || val % 1 > 0 ||
          set.has(row+1<<4|val) ||
          set.has(col+1<<8|val) ||
          set.has(box<<12|val)
        ) return false;
        set.add(row+1<<4|val);
        set.add(col+1<<8|val);
        set.add(box<<12|val);
      }
    } 
  } 
  return true;
};