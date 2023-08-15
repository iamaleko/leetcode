/**
 * @param {number[]} ratings
 * @return {number}
 */
const candy = (rating) => {
  const candys = [], children = [];

  for (const i in rating) {
    candys[i] = 1;
    children[i] = +i;
  }

  children.sort((a, b) => rating[a] - rating[b]);

  let candy = 0;

  for (const i of children) {
    if (rating[i - 1] !== undefined && rating[i] > rating[i - 1]) candys[i] = candys[i - 1] + 1;
    if (rating[i + 1] !== undefined && rating[i] > rating[i + 1]) candys[i] = Math.max(candys[i + 1] + 1, candys[i]);

    candy += candys[i];
  }

  return candy;
};