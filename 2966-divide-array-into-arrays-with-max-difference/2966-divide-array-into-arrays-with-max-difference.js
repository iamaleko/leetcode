const divideArray = (nums, k) => {
  nums.sort((a,b) => a - b);
  const res = [], l = nums.length;
  for (let i = 0; i < l;i+=3) {
    let a = [nums[i], nums[i+1], nums[i+2]];
    if (a[2] - a[0] > k) return [];
    res.push(a);
  }
  return res;
};
