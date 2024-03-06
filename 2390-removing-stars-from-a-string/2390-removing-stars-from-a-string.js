const removeStars = (s) => {
  let res = '', skip = 0;
  for (let i = s.length - 1; i > -1; i--) {
    if (s[i] === '*') {
      skip++;
    } else if (skip) {
      skip--;
    } else {
      res = s[i] + res;
    }
  }
  return res;
};