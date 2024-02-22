const findJudge = (n, trust) => {
  if (trust.length === 0) return n === 1 ? 1 : -1;

  const mem = new Array(n + 1).fill(1);
  let res = -1, i = 0;

  for (; i < trust.length; ++i) {
    mem[trust[i][0]] = 0;
    if (res === trust[i][0]) res = -1;
    if (mem[trust[i][1]] && ++mem[trust[i][1]] === n) res = trust[i][1];
  }

  return res;
};