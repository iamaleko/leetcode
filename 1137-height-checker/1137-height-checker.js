// const heightChecker = (h) => {
//   const e = [...h].sort((a, b) => a - b)
//   let ans = 0;
//   for (let i = 0; i < h.length; i++) if (h[i] !== e[i]) ans++;
//   return ans;
// };

const heightChecker = (h) => {
  const e = Array(101).fill(0);
  for (let i = 0; i < h.length; i++) e[h[i]]++;
  let ans = 0, p = 0;
  for (let i = 0; i < e.length; i++) while (e[i]--) if (i !== h[p++]) ans++;
  return ans;
};