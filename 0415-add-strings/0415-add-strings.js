const addStrings = (a, b) => {
  let res = '', mem = 0;
  a = a.split('').map(n => +n);
  b = b.split('').map(n => +n);
  while (a.length || b.length || mem) {
    let sum = (a.length ? a.pop() : 0) + (b.length ? b.pop() : 0) + mem;
    if (sum > 9) {
      sum -= 10;
      mem = 1;
    } else {
      mem = 0;
    }
    res = sum + '' + res;
  }
  return res;
};