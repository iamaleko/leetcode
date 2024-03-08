const maxFrequencyElements = (nums) => {
  const map = new Map();
  for (const num of nums) map.set(num, (map.get(num) || 0) + 1);
  let max = 0, sum = 0;
  for (const [num, cnt] of map) {
    if (cnt > max) {
      max = cnt;
      sum = max;
    } else if (cnt === max) {
      sum += max;
    }
  }
  return sum;
};