/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOddLengthSubarrays = (arr) => {
  let window = arr.length % 2 === 0 ? arr.length - 1 : arr.length,
      sum = 0;
  while (window > 0) {
    let pos = 0, wsum = 0;
    for (let i = 0; i < window; ++i) wsum += arr[i];
    for (;pos <= arr.length - window; ++pos) {
      sum += wsum;
      wsum += -arr[pos] + arr[pos + window] ?? 0;
    }
    window -= 2;
  }
  return sum;
};