/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = (s) => {
  let l = 0, r = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') { l++; r++; }
    else if (s[i] === ')') { l--; r--; }
    else if (s[i] === '*') { l--; r++; }
    if (r < 0) return false;
    if (l < 0) l = 0;
  }
  return l === 0;
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
