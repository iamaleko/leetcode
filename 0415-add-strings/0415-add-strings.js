const addStrings = (a, b) => {
  let res = '', mem = 0, ap = a.length - 1, bp = b.length -1, sum;
  while (ap > -1 || bp > -1 || mem) {
    sum = (+a[ap--] || 0) + (+b[bp--] || 0) + mem;
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