/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  let min = 0, max = 0; // min and max count of closing brackets needed on the right side
  for (const char of s) {
    if (char === '(') {
      min++;
      max++;
    } else if (char === ')') {
      min && min--; // can't have less than zero opening brackets
      if (max-- === 0) return false; // too many closing brackets on the left side
    } else if (char === '*') {
      min && min--; // can't have less than zero opening brackets
      max++;
    }
  }
  return min === 0; // it's enough closing brackets
};

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
// const checkValidString = (s) => {
//   const mem = {},
//         req = (i, level) => {
//           const key = (level << 7) + i;
//           if (mem.hasOwnProperty(key)) return mem[key];

//           while (i < s.length) {
//             if (s[i] === '(') {
//               level++;
//               i++;
//             } else if (s[i] === ')') {
//               level--;
//               if (level < 0) return mem[key] = false;
//               i++;
//             } else if (s[i] === '*') {
//               i++;
//               return mem[key] = req(i, level) || req(i, level + 1) || level && req(i, level - 1);
//             }
//           }
//           return mem[key] = level === 0;
//         };
//   return req(0, 0);
// };
