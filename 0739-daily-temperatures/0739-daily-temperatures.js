const dailyTemperatures = (t) => {
  const stack = [], res = new Array(t.length).fill(0);
  let i = 0, p = -1;
  for (; i < t.length; ++i) {
    while (t[stack[p]] < t[i]) {
      res[stack[p]] = i - stack[p--];
    }
    stack[++p] = i;
  }
  return t;
};