/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
  let ans = 0;
  while (n) {
    ans += n % m ? n : -n;
    n--;
  }
  return ans;
};