const selfDividingNumbers = (left, right) => {
  const res = [];
  main: while (left <= right) {
    let n = left, d;
    while (n) {
      if ((d = n % 10) === 0 || left % d) {
        ++left;
        continue main;
      } else {
        n = n / 10 | 0;
      }
    }
    res.push(left++);
  }
  return res;
};