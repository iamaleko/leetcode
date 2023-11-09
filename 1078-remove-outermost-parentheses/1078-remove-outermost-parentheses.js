/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
  let level = 0;
  let part = '';
  let res = [];
  for (const b of s) {
    if (b === '(') ++level;
    if (b === ')') --level;
    part += b;
    if (level) continue;
    res.push(part.slice(1, -1));
    part = '';
  }
  return res.join('');
};