type FixedArray<T, L extends number> = T[] & { length: L };

function longestValidParentheses(s: string): number {
  const stack: string[] = [],
    index: number[] = [],
    intervals: FixedArray<number, 2>[] = [];
  for (let i = 0; i < s.length; i++) {
    const b = s[i];
    if (b === '(') {
      stack.push(b);
      index.push(i);
    } else if (stack.at(-1) === '(') {
      stack.pop();
      const j = index.pop();
      while (intervals.length && intervals.at(-1)[0] > j) intervals.pop();
      if (intervals.length && intervals.at(-1)[1] === j - 1) {
        intervals.at(-1)[1] = i;
      } else {
        intervals.push([j, i] as FixedArray<number, 2>);
      }
    }
  }
  let ans = 0;
  for (const [from, to] of intervals) {
    if (ans < to - from + 1) ans = to - from + 1;
  }
  return ans;
};