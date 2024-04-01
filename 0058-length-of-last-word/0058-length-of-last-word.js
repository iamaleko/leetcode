const lengthOfLastWord=s=>s.trim``.split` `.at(-1).length;

// const lengthOfLastWord = (s) => {
//   let l, r = s.length;
//   while (s[--r] === ' ');
//   l = r;
//   while (l >= 0 && s[--l] !== ' ');
//   return r - l;
// };