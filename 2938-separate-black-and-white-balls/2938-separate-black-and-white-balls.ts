function minimumSteps(s: string): number {
  if (s.length < 2) return 0;
  const arr = s.split('').map((v) => v === '1' ? 1 : 0);
  let ans = 0, l = 0, r = 1;
  while (l < arr.length) {
    if (arr[l] === 0) {
      l++;
      if (r < l) r = l;
    } else {
      while (arr[r] === 1) r++;
      if (r === arr.length) return ans;
      arr[r] = 1;
      arr[l] = 0;
      ans += r - l;
    }
  }
  return ans;
};