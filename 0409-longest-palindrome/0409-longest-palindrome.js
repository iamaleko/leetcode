const longestPalindrome = (s) => {
  let map = {};
  for (const char of s) map[char] ? map[char]++ : map[char] = 1;
  let size = 0, one = 0;
  map = Object.values(map);
  for (const count of map) {
    if (count & 1) {
      one = 1;
      size += count - 1;
    } else {
      size += count;
    }
  }
  return size + one;
};