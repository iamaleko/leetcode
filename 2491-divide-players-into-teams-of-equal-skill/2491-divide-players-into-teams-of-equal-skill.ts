function dividePlayers(skill: number[]): number {
  const sum = skill.reduce((v, a) => a + v),
        team = sum / skill.length * 2
  if (team % 1) return -1;
  const m = new Map<number, number>();
  let chemistry = 0;
  for (let i = 0; i < skill.length; i++) {
    const rest = team - skill[i],
          count = m.get(rest);
    if (count) {
      count > 1 ? m.set(rest, count - 1) : m.delete(rest);
      chemistry += rest * skill[i];
    } else {
      m.set(skill[i], (m.get(skill[i]) ?? 0) + 1);
    }
  }
  return m.size ? -1 : chemistry;
};