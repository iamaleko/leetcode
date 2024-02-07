const evenOddBit = (n) => {
  let odd = 0, even = 0, isOdd = true;
  while (n) {
    if (n & 1) isOdd ? ++odd : ++even;
    n >>= 1;
    isOdd = !isOdd;
  }
  return [odd, even];
};