/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = (s, t) => {
  const map = {};
  for (const chr of s) {
    if (!(chr in map)) map[chr] = 0;
    ++map[chr]
  }
  for (const chr of t) {
    if (!(chr in map) || --map[chr] < 0) return chr;
  }
};