const licenseKeyFormatting = (s, k) => {
  let res = '', cnt = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === '-') continue;
    if (cnt === k) {
      res = '-' + res;
      cnt = 0;
    }
    cnt++;
    res = s[i].toUpperCase() + res;
  }
  return res;
};