/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  return s
    .match(new RegExp(`.{1,${k}}`,`g`))
    .map((s,i) => i % 2 === 0 ? s.split('').reverse().join('') : s)
    .join('');
};