/**
 * Time limit exeeded on cases with multiple adjacent *
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  const mem = {};
  const req = (i, level) => {
    const key = level+'|'+i;
    if (mem.hasOwnProperty(key)) return mem[key];

    while (i < s.length) {
      if (s[i] === '(') {
        level++;
        i++;
      } else if (s[i] === ')') {
        level--;
        if (level < 0) return mem[key] = false;
        i++;
      } else if (s[i] === '*') {
        i++;
        return mem[key] = req(i, level) || req(i, level + 1) || level && req(i, level - 1);
      }
    }
    return mem[key] = level === 0;
  };
  return req(0, 0);
};
