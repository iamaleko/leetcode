const minimumLength = (s) => {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) { ++l; --r; }
    else if (s[l] === s[r + 1]) { ++l; }
    else if (s[l - 1] === s[r]) { --r; }
    else { break; }
  }
  return r === l && (s[l] === s[r + 1] || s[l - 1] === s[r]) ? 0 : r - l + 1;
};