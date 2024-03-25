const findDuplicates = (nums) => {
  let p = 0, res = [];
  while (p < nums.length) {
    if (nums[p] !== p + 1 && nums[p] !== 0) {
      let mem = nums[p];
      nums[p] = 0;
      while (true) {
        if (nums[mem - 1] === mem) {
          res.push(mem);
          break;
        } if (nums[mem - 1] === 0) {
          nums[mem - 1] = mem;
          break;
        } else {
          let tmp = nums[mem - 1];
          nums[mem - 1] = mem;
          mem = tmp;
        }
      }
    }
    p++;
  }
  return res;
};

// 4,3,2,7,8,2,3,1
// _,2,3,4,8,2,7,1 => 3
// 1,2,3,4,_,_,7,8 => 2