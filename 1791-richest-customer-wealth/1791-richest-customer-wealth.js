const maximumWealth = function(accounts) {
  let max = 0;
  for (const account of accounts) {
    let i = account.length, sum = 0;
    while (i--) sum += account[i];
    if (max < sum) max = sum;
  }
  return max;
};