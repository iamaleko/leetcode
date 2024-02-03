const maxSumAfterPartitioning = (arr, k) => {
  const dp = new Array(arr.length).fill(0);
  dp[0] = arr[0];
  for(let i = 1; i < arr.length; ++i) {
    let j = 1, m = 0, h = Math.min(i + 1, k) + 1;
    while (j < h) {
      m = Math.max(m, arr[i - j + 1]);
      dp[i] = Math.max(dp[i], (dp[i - j] || 0) + m * j);
      ++j;
    }
  }
  return dp.at(-1);
};