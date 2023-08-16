/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = {};
  let letters = ransomNote.length;
  for (const char of magazine) char in map ? ++map[char] : map[char] = 1;
  for (const char of ransomNote) char in map && --map[char] >= 0 && --letters;
  return letters === 0;
};