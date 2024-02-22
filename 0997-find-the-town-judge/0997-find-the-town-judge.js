const findJudge = (n, trust) => {
  if (trust.length === 0) return n === 1 ? 1 : -1;

  const mem = new Array(n + 1).fill(1);
  let res = -1;

  for (const [who, whom] of trust) {
    mem[who] = 0;
    if (res === who) res = -1;
    if (mem[whom] && ++mem[whom] === n) res = whom;
  }

  return res;
};