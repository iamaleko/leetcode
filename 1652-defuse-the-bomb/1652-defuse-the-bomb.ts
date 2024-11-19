function decrypt(code: number[], k: number): number[] {
  const ans: number[] = new Array(code.length).fill(0);
  if (k) {
    const rs: number[] = new Array(code.length).fill(0);
    const j = code.length - 1;
    rs[0] = code[0];
    for (let i = 1; i < code.length; i++) rs[i] = code[i] + rs[i - 1];
    for (let i = 0; i < code.length; i++) {
      if (k > 0) {
        if (i + k <= j) {
          ans[i] = rs[i + k] - rs[i];
        } else {
          ans[i] = (rs[j] - rs[i]) + rs[i + k - j - 1];
        }
      } else {
        if (i + k >= 0) {
          ans[i] = rs[i - 1] - (i + k - 1 < 0 ? 0 : rs[i + k - 1]);
        } else {
          ans[i] = (i - 1 < 0 ? 0 : rs[i - 1]) + (rs[j] - rs[j + k + i]);
        }
      }
    }
  }
  return ans;
};