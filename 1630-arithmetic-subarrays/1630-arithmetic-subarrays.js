const checkArithmeticSubarrays = (nums, l, r) => {
  const res = [];
  main: for (let i = 0; i < l.length; ++i) {
    const arr = nums.slice(l[i], r[i] + 1).sort((a, b) => a - b),
          diff = arr[0] - arr[1];
    for (let j = 2; j < arr.length; ++j) if (arr[j - 1] - arr[j] !== diff) {
      res.push(false);
      continue main;  
    }
    res.push(true);
  }
  return res;
};

