/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
  const ans = [];
  for (let p = 0, i = 1; i <= n && p < target.length; i++) {
    ans.push('Push');
    if (i !== target[p]) {
      ans.push('Pop');
    } else {
      p++;
    }
  }
  return ans;
};