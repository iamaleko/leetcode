function checkInclusion(s1: string, s2: string): boolean {
  const m = new Map<string, number>();
  for (const ch of s1) m.set(ch, (m.get(ch) ?? 0) + 1);
  let _m = new Map(m);
  for (const ch of s2) {
    const count = _m.get(ch);
    if (count) {
      count === 1 ? _m.delete(ch) : _m.set(ch, count - 1);
      if (_m.size === 0) return true;
    } else {
      _m = new Map(m)
    }
  }
  return false;
};