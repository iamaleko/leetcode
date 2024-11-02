function isCircularSentence(sentence: string): boolean {
  const arr = sentence.split(' ');
  for (let i = 1; i < arr.length; i++) if (arr[i - 1].at(-1) !== arr[i][0]) return false;
  return arr[0][0] === arr.at(-1).at(-1);
};