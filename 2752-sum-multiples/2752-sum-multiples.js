/**
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = (n) => {
  let sum = 0, i = 2;
  while (++i <= n) if (i%3===0 || i%5===0 || i%7===0) sum += i;
  return sum;
};