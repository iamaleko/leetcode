function maxProfit(prices: number[]): number {
  const max = [];
  max[prices.length - 1] = prices[prices.length - 1];
  for (let i = prices.length - 2; i > -1; i--) {
    max[i] = Math.max(max[i + 1], prices[i]);
  }
  let ans = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (ans < max[i + 1] - prices[i]) ans = max[i + 1] - prices[i];
  }
  return ans;
};