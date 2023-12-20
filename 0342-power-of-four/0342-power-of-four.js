/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = (n) => (Math.log(n) / Math.log(4)).toPrecision(15) % 1 === 0;