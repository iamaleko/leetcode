function minSwaps(s: string): number {
  let lb = 0, l = 0, rb = 0, r = s.length - 1, ans = 0;
  while (l < r) {
    if (s[l] === ']') { lb--; } else
    if (s[l] === '[') { lb++; }
    while (lb < 0) {
      if (s[r] === '[') { rb--; } else
      if (s[l] === ']') { rb++; }
      if (rb < 0) {
        lb += 2;
        ans++;
      }
      r--;
    }
    l++;
  }
  return ans;
};