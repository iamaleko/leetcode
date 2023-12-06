const totalMoney = (n) => {
  let i = 0, sum = 0;
  while (i < 7) {
    const d = Math.floor(n / 7) + i + (n % 7 > i ? 1 : 0);
    sum += d * (d + 1) / 2 - i * (i + 1) / 2;
    ++i;
  }
  return sum;
};