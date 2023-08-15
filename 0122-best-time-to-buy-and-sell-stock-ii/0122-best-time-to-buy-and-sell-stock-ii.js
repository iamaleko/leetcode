/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let profit = 0;
  let price = undefined;
  for (let i = 0; i < prices.length; ++i) {
    if (price === undefined) {
      if (prices[i + 1] !== undefined && prices[i] <= prices[i + 1]) {
        price = prices[i];
      }
    } else if (prices[i + 1] === undefined || prices[i] > prices[i + 1]) {
      profit += prices[i] - price;
      price = undefined;
    }
  }
  return profit;
};