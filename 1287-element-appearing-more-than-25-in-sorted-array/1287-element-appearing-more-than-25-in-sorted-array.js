const findSpecialInteger = (arr) => {
  let cnt = 1, max = arr.length / 4 | 0;
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === arr[i - 1]) {
      ++cnt;
    } else if (cnt > max) {
      return arr[i - 1];
    } else {
      cnt = 1;
    }
  }
  return arr.at(-1);
};