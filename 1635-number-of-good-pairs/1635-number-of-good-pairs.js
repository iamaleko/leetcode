const numIdenticalPairs = (nums) => {
  const map = {};
  let pairs = 0;
  for (const num of nums) num in map ? pairs += map[num]++ : map[num] = 1;
  return pairs;
};