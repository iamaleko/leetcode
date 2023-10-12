/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
const isAcronym = (words, s) => words.map(w => w[0]).join('') === s;