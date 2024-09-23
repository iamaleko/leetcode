function minExtraChar(s: string, dictionary: string[]): number {
  const n = s.length,
        dict = new Set(dictionary),
        mem = new Map<number, number>();

  const dp = (l: number): number => {
    if (l === n) return 0;
    if (mem.has(l)) return mem.get(l);

    let ans = dp(l + 1) + 1;
    for (let r = l; r < n; r++) {
      if (dict.has(s.slice(l, r + 1))) ans = Math.min(ans, dp(r + 1));
    }

    mem.set(l, ans);
    return ans
  };

  return dp(0);
};