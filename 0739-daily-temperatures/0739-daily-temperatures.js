const dailyTemperatures = (t) => {
  const stack = [];
  let i = 0, p = -1;
  for (; i < t.length; ++i) {
    while (t[stack[p]] < t[i]) {
      t[stack[p]] = i - stack[p--];
    }
    stack[++p] = i;
  }
  while (p > -1) t[stack[p--]] = 0;
  return t;
};