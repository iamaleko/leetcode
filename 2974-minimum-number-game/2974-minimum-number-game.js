const numberGame = (nums) => {
  const res = [];
  nums.sort((a, b) => a - b);
  while (nums.length) {
    const a = nums.shift();
    res.push(nums.shift());
    res.push(a);
  }
  return res;
};