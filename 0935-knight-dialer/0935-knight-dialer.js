/**
 * @param {number} n
 * @return {number}
 */
const knightDialer = (n) => {
  const mod = 1e9 + 7, map = {
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
  let sum = 0, key, val, curr = {}, prev = {
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
    for (key in prev) {
      for (val of map[key]) {
        curr[val] = curr[val] ? (curr[val] + prev[key]) % mod : prev[key];
      }
    }
    prev = curr;
    curr = {};
  }
  
  for (key in prev) {
    sum += prev[key];
  }
  return sum % mod;
};