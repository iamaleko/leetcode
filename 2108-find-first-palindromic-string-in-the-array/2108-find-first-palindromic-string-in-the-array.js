const firstPalindrome = (words) => {
  for (const word of words) if (word.length === 1 || word === word.split``.reverse().join``) return word;
  return '';
};