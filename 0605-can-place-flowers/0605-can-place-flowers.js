/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(arr, n) {
  if (!n) return true;
  for (let i = 0; i < arr.length; ++i) {
    if (!arr[i - 1] && !arr[i] && !arr[i + 1]) {
      arr[i] = 1;
      --n;
    }
    if (!n) return true;
  }
  return !n;
};