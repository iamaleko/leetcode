const isPerfectSquare = (num) => {
  let res, del = 1;
  while (true) {
    if ((res = num / del) === del) return true;
    if ((res | 0) === (del | 0)) return false;
    del = (res + del) / 2
  }
};