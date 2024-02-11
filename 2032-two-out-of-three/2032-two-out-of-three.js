const twoOutOfThree = (a, b, c) => {
  const map = {};
  for (const num of a) map[num] = (map[num] || 0) | 1 << 0;
  for (const num of b) map[num] = (map[num] || 0) | 1 << 1;
  for (const num of c) map[num] = (map[num] || 0) | 1 << 2;
  console.log(map)
  return Object.entries(map).filter((e) => {
    let count = 0;
    while (e[1]) e[1] &= e[1] - 1, ++count;
    return count > 1;
  }).map((e) => +e[0]);
};