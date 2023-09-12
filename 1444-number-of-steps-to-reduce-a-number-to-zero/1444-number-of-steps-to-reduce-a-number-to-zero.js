/**
 * @param {number} num
 * @return {number}
 */
const numberOfSteps = (num) => {
  let steps = 0;  
  while (num) num = num % 2 === (++steps, 0) ? num / 2 : num - 1;
  return steps;
};