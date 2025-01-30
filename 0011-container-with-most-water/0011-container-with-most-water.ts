function maxArea(height: number[]): number {
  let ans = 0,
    l = 0,
    r = height.length - 1;
  while (l !== r) {
    if (height[l] < height[r]) {
      let has = height[l] * (r - l);
      if (has > ans) ans = has;
      ++l;
    } else {
      let has = height[r] * (r - l);
      if (has > ans) ans = has;
      --r;
    }
  }
  return ans;
};