const findKthPositive = (arr, k) => {
  let center, missing, l = 0, r = arr.length - 1, before = arr.length;
  while (l < r) {
    center = Math.floor((l + r) / 2);
    missing = arr[center] - center - 1;
    if (missing < k) {
      l = center + 1;
    } else {
      r = center;
    }
  }


  // nothing skipped
  missing = arr[l] - l - 1;
  if (missing < k) {
    return arr[l] + (k - missing);
  }

  // skipped at beginning
  if (l === 0) {
    return k;
  }

  // skipped in center
  missing = arr[--l] - l - 1;
  return arr[l] + (k - missing);
};