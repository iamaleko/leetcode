const toHex = (n) => {
  if (n < 0) n = 2 ** 32 + n;
  let s = '', map = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
  while (n) {
    s = map[n % 16 | 0] + s;
    n = n / 16 | 0;
  }
  return s || '0';
};