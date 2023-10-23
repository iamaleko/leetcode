/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = (n) => new Array(n).fill(0).map((_,i) => (++i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i + '');