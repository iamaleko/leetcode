function areSentencesSimilar(sentence1: string, sentence2: string): boolean {
  if (sentence1 === sentence2) return true;
  let a = sentence1.split(' '),
      b = sentence2.split(' ');
  if (b.length > a.length) [a, b] = [b, a];
  let gaps = 0, isGap = false, ap = 0, bp = 0;
  while (ap < a.length) {
    if (bp < b.length && a[ap] === b[bp]) {
      ap++;
      bp++;
      isGap = false;
    } else {
      if (!isGap) {
        gaps++;
        isGap = true;
      }
      ap++;
    }
  }
  return bp === b.length && gaps <= 1;
};