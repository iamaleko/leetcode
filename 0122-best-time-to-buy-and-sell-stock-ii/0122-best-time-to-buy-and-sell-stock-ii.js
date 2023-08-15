/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let owning = false;
  let price = 0;
  for (let i = 0; i < prices.length; ++i) {
    if (owning) {
      if (prices[i + 1] === undefined || prices[i] > prices[i + 1]) {
        // sell
        owning = false;
        profit += prices[i] - price;
      } else {
        // do nothing
      }
    } else {
      if (prices[i + 1] === undefined || prices[i] > prices[i + 1]) {
        // do nothing
      } else {
        // buy
        owning = true;
        price = prices[i];
      }
    }
  }
  return profit;
};