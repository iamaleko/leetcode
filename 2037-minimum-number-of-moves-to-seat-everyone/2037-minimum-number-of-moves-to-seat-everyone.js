const minMovesToSeat = (a, b) => {
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  let moves = 0;
  for (let i = 0; i < a.length; ++i) {
    moves += Math.abs(a[i] - b[i]);
  }
  return moves;
};