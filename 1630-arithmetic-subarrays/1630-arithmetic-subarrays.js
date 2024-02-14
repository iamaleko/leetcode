const checkArithmeticSubarrays = (nums, l, r) => {
  const res = [];
  for (let i = 0; i < l.length; ++i) {
    let min = Infinity;
    let max = -Infinity;
    for (let p = l[i]; p <= r[i]; ++p) {
      if (nums[p] < min) min = nums[p];
      if (nums[p] > max) max = nums[p];
    }
    if (min === max) {
      res.push(true)
    } else {
      const diff = (max - min) / (r[i] - l[i]);
      const arr = new Array(r[i] - l[i] + 1).fill(0);
      for (let p = l[i]; p <= r[i]; ++p) {
        const ind = (nums[p] - min) / diff;
        if (ind % 1 || ++arr[ind] > 1) break;
      }
      res.push(!~arr.indexOf(0));
    }
  }
  return res;
};

