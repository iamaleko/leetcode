const sumOfUnique = (nums) => {
  const count = new Array(101).fill(0);
  for (const num of nums) ++count[num];
  let res = 0;
  for (let i = 1; i < 102; ++i) if (count[i] === 1) res += i;
  return res;
};