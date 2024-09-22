// Trie
function findKthNumber(n: number, k: number): number {
  let ans = 1;
  k--;
  const countSteps = (a, b) => {
    let steps = 0;
    while (a <= n) {
      steps += Math.min(n + 1, b) - a
      a *= 10
      b *= 10
    }
    return steps
  };
  while (k > 0) {
    const step = countSteps(ans, ans + 1);
    if (step <= k) {
      ans += 1;
      k -= step;
    } else {
      ans *= 10;
      k -= 1;
    }
  }
  return ans;
}

// O(n) -> works until 100000000, TLE on 1000000000
// function findKthNumber(n: number, k: number): number {
//   let d = 1, m = n / 10 | 0;
//   while (--k) {
//     if (d <= m) {
//       d *= 10;
//     } else {
//       if (d === n) d = d / 10 | 0;
//       while (d % 10 === 9) d = d / 10 | 0;
//       d += 1;
//     }
//   }
//   return d;
// };
