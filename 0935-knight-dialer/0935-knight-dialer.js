/**
 * @param {number} n
 * @return {number}
 */
const knightDialer = (n) => {
  const mod = 1e9 + 7;
  const map = {
    '0': ['4','6'],
    '1': ['8','6'],
    '2': ['7','9'],
    '3': ['4','8'],
    '4': ['0','9','3'],
    '5': [],
    '6': ['0','7','1'],
    '7': ['6','2'],
    '8': ['1','3'],
    '9': ['4','2'],
  };
  let sum = 0;
  let curr = {
    '0': 1,
    '1': 1,
    '2': 1,
    '3': 1,
    '4': 1,
    '5': 1,
    '6': 1,
    '7': 1,
    '8': 1,
    '9': 1,
  }
  
  while (--n > 0) {
    const _curr = {};
    for (let key in curr) {
      for (let _key of map[key]) {
        if (_curr[_key]) {
          _curr[_key] += curr[key];
        } else {
          _curr[_key] = curr[key];
        }
      }
    }
    for (const key in _curr) _curr[key] %= mod;
    curr = _curr;
  }
  
  for (const key in curr) sum += curr[key];
  return sum % mod;
};