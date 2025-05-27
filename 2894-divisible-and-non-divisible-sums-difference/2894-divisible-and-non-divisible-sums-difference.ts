function differenceOfSums(n: number, m: number): number {
  let ans = 0;
  while (n) {
    ans += n % m ? n : -n;
    n--;
  }
  return ans;
};