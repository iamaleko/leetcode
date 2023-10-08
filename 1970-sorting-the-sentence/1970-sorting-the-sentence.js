/**
 * @param {string} s
 * @return {string}
 */
const sortSentence = (s) => {
  return s.split(' ').sort((a, b) => Number(a.at(-1)) - Number(b.at(-1))).map((s) => s.slice(0,-1)).join(' ');
};