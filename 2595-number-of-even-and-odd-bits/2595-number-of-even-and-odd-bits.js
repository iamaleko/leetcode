const evenOddBit = (n) => {
  let odd = 0, even = 0, a = n & 341, b = n & 682;
  while (a) a &= a - 1, ++odd;
  while (b) b &= b - 1, ++even;
  return [odd, even];
};