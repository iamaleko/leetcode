/**
 * @param {number[]} piles
 * @return {number}
 */
const maxCoins = (piles) => {
  piles.sort((a, b) => a - b);
  let sum = 0;
  for (let i = piles.length - 2 * piles.length / 3; i < piles.length; i += 2) {
    sum += piles[i];
  }
  return sum;
};