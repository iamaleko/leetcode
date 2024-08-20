function stoneGameII(piles: number[]): number {
  // reversed running sum
  const sum = piles.slice();
  for (let i = sum.length - 1; i > 0; i--) sum[i - 1] += sum[i];

  // dp
  const mem = {};
  const getKey = (a: number, b: number): number => (a + b) / 2 * (a + b + 1) + b;

  const maxStones = (i: number, m: number): number => {
    // check overlow
    if (i + m * 2 >= piles.length) return sum[i];
    // check cache
    const key = getKey(i, m);
    if (mem.hasOwnProperty(key)) return mem[key];
    // find minimum score for opponent
    let min = sum[i];
    for (let j = 1; j <= m * 2; j++) {
      min = Math.min(min, maxStones(i + j, Math.max(j, m)));
    }
    return mem[key] = sum[i] - min;
  }

  return maxStones(0, 1);
};