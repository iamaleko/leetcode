const longestCommonPrefix = function(strs) {
  let r = strs[0].length;
  for (let i = 1; i < strs.length; i++) {
    for (let j = r; j >= 0; j--) {
      if (strs[i][j] !== strs[i - 1][j]) {
        r = j;
        if (!r) break;
      }
    }
  }
  return strs[0].slice(0, r);
};