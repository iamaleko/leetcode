const bagOfTokensScore = (tokens, power) => {
  let score = 0, l = 0, r = tokens.length - 1, penalty = 0;
  tokens.sort((a, b) => a - b);
  do {
    if (power >= tokens[l]) {
      power -= tokens[l++];
      ++score;
      penalty = 0;
    } else if (score) {
      power += tokens[r--];
      --score;
      ++penalty;
    } else {
      break;
    }
  } while (l <= r);
  return score + penalty;
};