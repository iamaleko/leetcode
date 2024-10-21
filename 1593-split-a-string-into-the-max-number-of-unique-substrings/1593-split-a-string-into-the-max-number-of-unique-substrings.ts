function maxUniqueSplit(s: string): number {
  const set = new Set<string>();
  const split = (l): number => {
    let max = 0;
    for (let r = l + 1; r <= s.length; r++) {
      let ss = s.slice(l, r);
      if (!set.has(ss)) {
        set.add(ss);
        max = Math.max(r === s.length ? 1 : 1 + split(r), max);
        set.delete(ss);
      }
    }
    return max;
  };
  return split(0);
};