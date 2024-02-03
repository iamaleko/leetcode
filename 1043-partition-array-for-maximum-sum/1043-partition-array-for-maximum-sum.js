const maxSumAfterPartitioning = (arr, k) => {
  const dp = [0, arr[0]];
  for(let i = 2; i <= arr.length; ++i) {
    let j = 1, m = dp[i] = 0, h = Math.min(i, k);
    while (j <= h) dp[i] = Math.max(dp[i], dp[i - j] + (m = Math.max(m, arr[i - j])) * j++);
  }
  return dp.at(-1);
};