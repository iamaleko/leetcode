const minimumLength = (s) => {
  let l = 0, r = s.length - 1;
  while (l <= r) {
    if (l < r && s[l] === s[r]) { ++l; --r; }
    else if (s[l] === s[r + 1]) { ++l; }
    else if (s[l - 1] === s[r]) { --r; }
    else { break; }
  }
  return r - l + 1;
};