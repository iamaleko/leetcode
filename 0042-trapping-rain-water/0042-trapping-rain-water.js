/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (arr) => {
  if (arr.length < 2) return 0;
  let sum = 0;
  for (let i = 1; i < arr.length; ++i) {
    // find first level decrease
    if (arr[i] < arr[i - 1]) {
      // find level encrease or max level from below
      let j = i, mi = i;
      for (; arr[j] < arr[i - 1] && j < arr.length; ++j) {
        if (arr[j] >= arr[mi]) {
          mi = j;
        }
      }
      if (j < arr.length) mi = j;
      
      // add water in between
      if (mi - i > 0) {
        const min = Math.min(arr[i - 1], arr[mi]);
        for (let k = i; k < mi; ++k) if (arr[k] < min) sum += min - arr[k];
        i = mi - 1;    
      }
    }
  }
  return sum;
};