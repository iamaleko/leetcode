/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = (s) => {
  const stack = [], index = [], intervals = [];
  for (let i = 0; i < s.length; ++i) {
    const b = s[i];
    if (b === '(') {
      stack.push(b);
      index.push(i);
    } else if (b === ')' && stack.at(-1) === '(') {
      stack.pop();
      const at = index.pop();
      while (intervals.length && intervals.at(-1)[0] > at) {
        intervals.pop();
      }
      if (intervals.length && intervals.at(-1)[1] === at - 1) {
        intervals.at(-1)[1] = i;
      } else {
        intervals.push([at, i]);
      }
    } else {
      stack.slice(0, i);
      index.slice(0, i);
    }
  }

  let max = 0;
  for ([from, to] of intervals) {
    if (max < to - from + 1) max = to - from + 1;
  }
  return max;
};