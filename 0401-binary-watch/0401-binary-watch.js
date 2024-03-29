const readBinaryWatch = (on) => {
  const res = [];
  const req = (on, str) => {
    if (on === 0) {
      const n = parseInt(str, 2);
      const hours = (n & 960) >> 6;
      const minutes = n & 63;
      if (hours < 12 && minutes < 60) res.push(hours + ':' + (minutes + '').padStart(2,0));
    } else if (on < 10 - str.length) {
      req(on - 1, '1' + str);
      req(on, '0' + str);
    } else if (on === 10 - str.length) {
      req(0, str.padStart(10, 1));
    }
  }
  req(on, '');
  res.sort();
  return res;
};