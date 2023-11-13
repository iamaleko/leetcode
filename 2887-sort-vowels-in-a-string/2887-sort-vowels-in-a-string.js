/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
  const set = new Set('aeiouAEIOU');
  let vowels = [];
  s = s.split('')
  for (const i in s) {
    if (set.has(s[i])) {
      vowels.push(s[i].charCodeAt(0));
      s[i] = vowels.length - 1;
    }
  }
  vowels.sort((a, b) => a - b);
  for (const i in s) {
    if (typeof s[i] === 'number') {
      s[i] = String.fromCharCode(vowels[s[i]]);
    }
  }
  return s.join('');
};