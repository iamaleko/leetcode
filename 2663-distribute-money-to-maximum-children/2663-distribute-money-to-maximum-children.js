/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
const distMoney = (money, children) => {
  if (money < children) return -1;
  if (money - children < 7) return 0;
  let res = Math.min(Math.floor(money / 8), children);
  // console.log(money - 8 * res, children - res)
  while (
    money - 8 * res > 0 && children - res === 0 ||
    money - 8 * res < children - res ||
    money - 8 * res === 4 && children - res === 1
  ) res--;
  return res;
};