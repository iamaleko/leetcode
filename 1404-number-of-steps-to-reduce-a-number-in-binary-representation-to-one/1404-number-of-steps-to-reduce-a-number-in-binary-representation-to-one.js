const numSteps = (s) => {
  let ans = 0;
  while (s !== '1') {
    if (s[s.length - 1] === '1') {
      const i = s.lastIndexOf('0');
      if (i === -1) {
        s = '1' + ''.padStart(s.length, '0')
      } else {
        s = s.substring(0, i) + '1' + ''.padStart(s.length - (i + 1), '0')
      }
    } else {
      s = s.substring(0, s.length - 1);
    }
    ans++
  }
  return ans;
};