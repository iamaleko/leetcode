const maximumElementAfterDecrementingAndRearranging = (arr) => {
  arr.sort((a,b) => a - b);
  let max = 0;
  for (const num of arr) {
    if (num > max) ++max;
  }
  return max;
};