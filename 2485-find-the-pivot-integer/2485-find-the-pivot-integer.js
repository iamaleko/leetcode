const pivotInteger = (n) => {
  let total = n * ++n / 2, sum = 0, i = 1;
  while (i < n) {
    if (sum === (total -= i)) return i;
    sum += i++;
  };
  return -1;
};