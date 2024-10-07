function convertToTitle(n: number): string {
  let ans = '';
  const dict = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  while (n) {
    n--;
    ans = dict[n % 26] + ans;
    n = Math.floor(n / 26);
  }
  return ans;
};

