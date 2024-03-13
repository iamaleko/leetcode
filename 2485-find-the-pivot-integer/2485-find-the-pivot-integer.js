const pivotInteger = (n) => {
  let total = 0, sum = 0, i;
  for (i = 1; i <= n; total += i++);
  for (i = 1; i <= n; ++i) {
    if (sum === (total -= i)) return i;
    sum += i;
  };
  return -1;
};