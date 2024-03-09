const getCommon = (a, b) => {
  let l = 0, r = 0;
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);
  while (l < a.length && r < b.length) {
    if (a[l] === b[r]) return a[l];
    a[l] > b[r] ? r++ : l++;
  }
  return -1;
};