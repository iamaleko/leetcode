const heightChecker = (h) => {
  const e = h.slice().sort((a,b) => a - b)
  let ans = 0;
  for (let i = 0; i < h.length; i++) if (h[i] !== e[i]) ans++;
  return ans;
};