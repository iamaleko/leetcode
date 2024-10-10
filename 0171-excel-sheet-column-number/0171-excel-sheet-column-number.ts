function titleToNumber(str: string): number {
  let ans = 0;
  for (let pos = 0, i = str.length - 1; i >= 0; i--, pos++) {
    const n = str[i].charCodeAt(0) - 64;
    ans += 26 ** pos * n;
  }
  return ans;
};

