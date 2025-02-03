function isValidSudoku(board: string[][]): boolean {
  const set = new Set<number>();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      const val = Number(board[row][col]);
      if (!Number.isNaN(val)) {
        const box = (row / 3 | 0) * 3 + (col / 3 | 0);
        if (
          set.has(row + 1 << 4 | val) ||
          set.has(col + 1 << 8 | val) ||
          set.has(box + 1 << 12 | val)
        ) return false;
        set.add(row + 1 << 4 | val);
        set.add(col + 1 << 8 | val);
        set.add(box + 1 << 12 | val);
      }
    } 
  } 
  return true;
};