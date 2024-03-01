const maximumOddBinaryNumber = (s) => {
  let cnt = 0;
  for (let i = 0; i < s.length; ++i) s[i] === '1' && cnt++;
  return '1'.repeat(cnt - 1) + '0'.repeat(s.length - cnt) + '1';
};