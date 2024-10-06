function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  if (sentence1 === sentence2) return true;
  let a = sentence1.split(' '),
      b = sentence2.split(' ');
  if (b.length > a.length) [a, b] = [b, a];
  const check = (a: string[], b: string[]): boolean => {
    let hasGap = false, isGap = false, ap = 0, bp = 0;
    while (ap < a.length) {
      if (bp < b.length && a[ap] === b[bp]) {
        bp++;
        isGap = false;
      } else if (!isGap) {
        if (hasGap) return false; 
        hasGap = isGap = true;
      }
      ap++;
    }
    return bp === b.length;
  }
  return check(a, b) || check(a.reverse(), b.reverse());
};