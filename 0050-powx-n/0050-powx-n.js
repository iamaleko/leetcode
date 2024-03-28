const myPow = (x, n) => {
  if (n === 0) return 1;
  let i = Math.abs(n), res = 1;
  
  while (i > 0) {
    if (i % 2 === 0) {
      x *= x;
      i /= 2;
    } else {
      i--;
      res *= x;
    }
  }

  return n > 0 ? res : 1 / res;
};