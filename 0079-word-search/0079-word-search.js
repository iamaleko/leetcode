const exist = (board, word) => {
  word = word.split('').reverse();
  const dfs = (y, x, word) => {
    if (board[y]?.[x] === word.at(-1)) {
      const bchar = board[y][x];
      const wchar = word.pop();
      board[y][x] = null;
      if (
        word.length === 0 ||
        dfs(y - 1, x, word) ||
        dfs(y + 1, x, word) ||
        dfs(y, x + 1, word) ||
        dfs(y, x - 1, word)
      ) return true;
      board[y][x] = bchar;
      word.push(wchar);
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