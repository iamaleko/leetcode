const findMaxConsecutiveOnes = (nums) => {
  let w = 0, m = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      w++;
      if (m < w) m = w;
    } else {
      w = 0;
    }
  }
  return m;
};