const findComplement = (num) => {
  let m = 0, n = num;
  while (n) n >>= 1, m = m * 2 + 1;
  return (num ^ 2 ** 31 - 1) & m;
};