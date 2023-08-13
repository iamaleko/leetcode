const peakIndexInMountainArray = (arr) => {
  let l = 0, r = arr.length - 1, c;
  while (l < r) {
    c = (l + r) / 2 | 0;
    if (arr[c] < arr[c + 1]) {
      l = c + 1;
    } else {
      r = c;
    }
  }

  return l;
};