const nextGreaterElement = (a, b) => {
  const map = {};
  for (let i = b.length - 1; i > -1; i--) {
    if (b[i + 1] !== undefined) {
      let n = b[i + 1];
      while (n > -1 && n < b[i]) n = map[n];
      map[b[i]] = n;
    } else {
      map[b[i]] = -1;
    }
  }
  const res = [];
  for (let i = 0; i < a.length; i++) res.push(map[a[i]]);
  return res;
};