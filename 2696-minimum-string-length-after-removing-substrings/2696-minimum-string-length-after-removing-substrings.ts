function minLength(s: string): number {
  let ab: number = -1;
  let cd: number = -1;
  while (true) {
    let pair: string;
    if (ab === -1) ab = s.indexOf('AB');
    if (ab >= 0) {
      s = s.slice(0, ab) + s.slice(ab + 2);
      pair = s.slice(ab, ab + 2);
      ab = pair === 'AB' ? ab : -1;
      cd = pair === 'CD' ? cd : -1;
      continue;
    }
    if (cd === -1) cd = s.indexOf('CD');
    if (cd >= 0) {
      s = s.slice(0, cd) + s.slice(cd + 2);
      pair = s.slice(cd, cd + 2);
      ab = pair === 'AB' ? ab : -1;
      cd = pair === 'CD' ? cd : -1;
      continue;
    }
    break;
  }
  return s.length;
};