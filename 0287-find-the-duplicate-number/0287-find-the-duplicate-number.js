const findDuplicate = (nums) => {
  let s = nums[0], f = nums[0];
  do {
    s = nums[s];
    f = nums[nums[f]];
  } while (s !== f);
  s = nums[0];
  while(f !== s) {
    s = nums[s]
    f = nums[f]
  }
  return s;
};

// explanation of cicle start node detection https://yuminlee2.medium.com/floyds-cycle-detection-algorithm-b27ed50c607f#:~:text=Floyd's%20Cycle%20Detection%20Algorithm%20initializes,Floyd's%20Tortoise%20and%20Hair%20Algorithm.