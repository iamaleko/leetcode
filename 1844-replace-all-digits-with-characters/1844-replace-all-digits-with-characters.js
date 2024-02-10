const replaceDigits = (s) => {
  let res = '';
  for (let i = 0; i < s.length; ++i) {
    res += i % 2 ? String.fromCharCode(s.charCodeAt(i - 1) + +s[i]) : s[i];
  }
  return res;
};