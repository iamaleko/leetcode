const arithmeticTriplets = (nums, diff) => {
  const map = new Map();
  for (const i in nums) {
    map.set(nums[i], +i);
  }
  let res = 0;
  for (const i in nums) {
    if (map.get(nums[i] - diff) < +i && map.get(nums[i] + diff) > +i) {
      ++res;
    }
  }
  return res;
};