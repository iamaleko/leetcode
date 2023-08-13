const guessNumber = (r) => {
  let l = 0, c;
  while (true) {
    c = (l + r) / 2 | 0;
    switch (guess(c)) {
      case 0: return c;
      case -1: r = c - 1; break;
      case 1: l = c + 1; break;
    }
  }
};