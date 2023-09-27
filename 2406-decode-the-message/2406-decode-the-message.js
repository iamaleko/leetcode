/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
const decodeMessage = (key, message) => {
  const map = {};
  [...new Set(key.trim().split(/\s*/))].forEach((chr, i) => {
    map[chr] = String.fromCharCode(97 + i);
  });
  let res = '';
  for (const chr of message) {
    res += chr === ' ' ? ' ' : map[chr];
  }
  return res;
};