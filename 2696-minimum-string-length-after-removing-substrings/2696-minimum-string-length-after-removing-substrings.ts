function minLength(s: string): number {
  let i = -1;
  while (true) {
    if (i === -1) i = s.indexOf('AB');
    if (i === -1) i = s.indexOf('CD');
    if (i === -1) break;

    s = s.slice(0, i) + s.slice(i + 2);
    let pair = s.slice(i, i + 2);
    if (pair !== 'AB' && pair !== 'CD') i = -1;
  }
  return s.length;
};