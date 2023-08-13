const search = (intervals, target) => {
  let l = 0, r = intervals.length - 1, c;
  while (l < r) {
    c = (l + r) / 2 | 0;
    if (intervals[c][0] < target) { l = c + 1; } else { r = c; }
  }
  return intervals[l][2];
}
const findRightInterval = (intervals) => {
  let max = -Infinity;
  for (const i in intervals) {
    if (max < intervals[i][0]) max = intervals[i][0];
    intervals[i][2] = i;
  }

  intervals.sort((a, b) => a[0] - b[0]);

  const res = new Array(intervals.length);
  const mem = {};
  for (const i in intervals) {
    if (intervals[i][1] > max) {
      res[intervals[i][2]] = -1;
    } else {
      if (mem[intervals[i][1]] === undefined) {
        mem[intervals[i][1]] = search(intervals, intervals[i][1]);
      }
      res[intervals[i][2]] = mem[intervals[i][1]];
    }
  }
  
  return res;
};