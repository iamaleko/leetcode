const hIndex = (arr) => {
  let l = 0, r = arr.length - 1, c, h = 0;
  while (l < r) {
    c = (l + r) / 2 | 0;
    if (arr[c] < arr.length - c) {
      l = c + 1;
    } else {
      r = c;
    }
  }

  return Math.min(arr[l], arr.length - l);
};