const findClosestElements = (arr, k, x) => {
  let l = 0, r = arr.length - k, c;
  while (l < r) {
    c = (l + r) / 2 | 0;
    if (x - arr[c] > arr[c + k] - x) {
      l = c + 1;
    } else {
      r = c;
    }
  }
  return arr.slice(l, l + k);
};