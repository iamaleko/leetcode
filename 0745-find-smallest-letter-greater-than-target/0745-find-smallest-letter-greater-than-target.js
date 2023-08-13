/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
  let r = letters.length - 1;
  if (letters[r] > target) {
    let l = 0, s = letters[r];

    while (l <= r) {
      let c = l + (r - l) / 2 | 0;
      if (letters[c] <= target) {
        l = c + 1;
      } else {
        r = c - 1;
        if (letters[c] < s) {
          s = letters[c];
        }
      }
    }

    return s;
  }

  return letters[0];
};