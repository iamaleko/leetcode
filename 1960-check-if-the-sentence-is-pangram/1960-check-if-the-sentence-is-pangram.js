/**
 * @param {string} sentence
 * @return {boolean}
 */
const checkIfPangram = (sentence) => new Set(sentence).size === 26;