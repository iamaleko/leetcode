const subsets = (nums) => {
  const res = [[]];
  const req = (arr, i) => {
    for (; i < nums.length; i++) {
      let sub = arr.slice().concat(nums[i]); 
      res.push(sub);
      if (i < nums.length - 1) req(sub, i + 1);
    }
  };
  req([], 0);
  return res;
};