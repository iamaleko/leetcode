function toGoatLatin(sentence: string): string {
  const vovels = new Set(['a','e','i','o','u']);
  return sentence.split(' ').map((w, i) => {
    if (!vovels.has(w[0].toLowerCase())) w = w.slice(1) + w[0];
    return w + 'ma' + ''.padStart(i + 1, 'a');
  }).join(' ')
};