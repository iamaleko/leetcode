const findJudge = (n, trust) => {
  if (trust.length === 0) return n === 1 ? 1 : -1;

  const map = new Map();
  let res = -1;

  for (let i = 0; i < trust.length; ++i) {
    map.set(trust[i][0], -1);
    if (res === trust[i][0]) res = -1;
    let cnt = map.get(trust[i][1]) || 0;
    if (cnt !== -1) {
      map.set(trust[i][1], ++cnt);
      if (cnt === n - 1) res = trust[i][1];
    }
  }

  return res;
};