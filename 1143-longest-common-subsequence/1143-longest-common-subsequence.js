const longestCommonSubsequence = (a, b) => {
  const mem = [];
  const dp = (ap, bp) => {
    if (ap === a.length || bp === b.length) return 0;
    if (mem[ap]?.[bp] !== undefined) return mem[ap][bp];
    if (!mem[ap]) mem[ap] = [];
    return mem[ap][bp] = a[ap] === b[bp] ? 1 + dp(ap + 1,bp + 1) : Math.max(dp(ap, bp + 1), dp(ap + 1, bp));
  }
  return dp(0,0);
};