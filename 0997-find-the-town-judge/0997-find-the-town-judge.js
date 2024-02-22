const findJudge = (n, trust) => {
  const untrusted = new Set(new Array(n).fill(0).map((v, i) => i + 1));
  const trusted = new Map();
  for (const [who, whom] of trust) {
    untrusted.delete(who);
    trusted.set(whom, (trusted.get(whom) || 0) + 1);
  }
  const candidate = untrusted.size === 1 && untrusted.values().next().value;
  return candidate && (trusted.get(candidate) || 0) === n - 1 ? candidate : -1;
};