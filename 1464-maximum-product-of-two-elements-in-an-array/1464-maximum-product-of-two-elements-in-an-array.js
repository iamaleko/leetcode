const maxProduct = (nums) => {
  let a = 0, b = 0;
  for (const num of nums) {
    if (num > a) {
      b = a;
      a = num;
    } else if (num > b) {
      b = num;
    }
  }
  return (a - 1) * (b - 1);
};