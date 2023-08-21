/**
 * @param {string} command
 * @return {string}
 */
const interpret = (str) => {
  let res = '', acc = '';
  const tokens = {
    'G': 'G',
    '()': 'o',
    '(al)': 'al',
  };
  for (const char of str) {
    acc += char;
    if (acc in tokens) {
      res += tokens[acc];
      acc = '';
    }
  }

  return res;
};