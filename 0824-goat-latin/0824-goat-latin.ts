function toGoatLatin(sentence: string): string {
  const vovels = ['a','e','i','o','u','A','E','I','O','U'];
  return sentence
    .split(' ')
    .map((w, i) => (vovels.includes(w[0]) ? w : w.slice(1) + w[0]) + 'm' + 'a'.repeat(i + 2))
    .join(' ');
};