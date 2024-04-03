const exist = (board, word) => {
  const dfs = (y, x, p) => {
    if (board[y] && board[y][x] === word[p]) {
      const char = board[y][x];
      board[y][x] = null;
      if (
        ++p === word.length ||
        dfs(y - 1, x, p) ||
        dfs(y + 1, x, p) ||
        dfs(y, x + 1, p) ||
        dfs(y, x - 1, p)
      ) return true;
      board[y][x] = char;
    }
    return false;
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (dfs(y, x, 0)) return true;
    }
  }
  return false;
};