const frequencySort = (s) => {
  const map = {};
  for (const char of s) char in map ? ++map[char] : map[char] = 1;
  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map((item) => ''.padStart(item[1], item[0]))
    .join``;
};