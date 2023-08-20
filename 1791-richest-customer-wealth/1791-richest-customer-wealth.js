const maximumWealth = function(accounts) {
  let max = 0, a = accounts.length, b, sum;
  while (a--) {
    b = accounts[a].length
    sum = 0;
    while (b--) sum += accounts[a][b];
    if (max < sum) max = sum;
  }
  return max;
};