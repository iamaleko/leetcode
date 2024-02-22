const findJudge = (n, trust) => {
  if (trust.length === 0) return n === 1 ? 1 : -1;

  const map = new Map();
  let res = -1;

  for (const [who, whom] of trust) {
    map.set(who, -1);
    if (res === who) res = -1;
    let cnt = map.get(whom) || 0;
    if (cnt !== -1) {
      map.set(whom, ++cnt);
      if (cnt === n - 1) res = whom;
    }
  }

  return res;
};