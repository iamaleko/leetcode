const exist = (board, word) => {
  const dfs = (y, x, word) => {
    const char = board[y]?.[x];
    if (char === word.at(-1)) {
      word = word.slice(0, -1);
      board[y][x] = null;
      if (
        word.length === 0 ||
        dfs(y - 1, x, word) ||
        dfs(y + 1, x, word) ||
        dfs(y, x + 1, word) ||
        dfs(y, x - 1, word)
      ) return true;
      board[y][x] = char;
    }
    return false;
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (dfs(y, x, word)) return true;
    }
  }
  return false;
};