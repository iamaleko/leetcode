/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  const arr = (num+'').split('').map((v) => v * 1);
  const max = new Array(arr.length).fill(0);
  max[arr.length - 1] = arr.length - 1;
  for (let i = arr.length - 2; i >= 0; i--) max[i] = arr[i] <= arr[max[i + 1]] ? max[i + 1] : i;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[max[i + 1]]) {
      [arr[i], arr[max[i + 1]]] = [arr[max[i + 1]], arr[i]];
      return parseInt(arr.join(''), 10)
    }
  }
  return num;
};