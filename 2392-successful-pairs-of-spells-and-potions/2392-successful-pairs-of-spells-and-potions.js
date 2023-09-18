/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = (spells, potions, success) => {
  potions.sort((a, b) => a - b);
  const res = [];
  for (const spell of spells) {
    let l = 0, r = potions.length - 1, c;
    while (l <= r) {
      c = (l + r) / 2 | 0;
      if (potions[c] * spell < success) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    res.push(potions.length - l)
  }
  return res;
};