/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n) => (Math.log2(n) / Math.log2(3)).toPrecision(15) % 1 === 0;