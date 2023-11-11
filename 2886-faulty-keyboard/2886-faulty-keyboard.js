/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
  let res = [];
  for (const chr of s) chr === 'i' ? res.reverse() : res.push(chr)
  return res.join('');
};