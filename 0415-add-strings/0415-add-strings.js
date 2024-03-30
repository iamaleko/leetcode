const addStrings = (a, b) => {
  let res = '', mem = 0;
  while (a || b || mem) {
    let sum = (+a.at(-1) || 0) + (+b.at(-1) || 0) + mem;
    if (sum > 9) {
      sum -= 10;
      mem = 1;
    } else {
      mem = 0;
    }
    a = a.slice(0, -1);
    b = b.slice(0, -1);
    res = sum + '' + res;
  }
  return res;
};