const numberOfPairs = (nums) => {
  let pairs = 0, set = new Set();
  for (const num of nums) set.has(num) ? (set.delete(num), ++pairs) : set.add(num);
  return [pairs, set.size];
};