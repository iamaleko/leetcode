function maxArea(height: number[]): number {
  let max = 0,
    l = 0,
    r = height.length - 1,
    has: number;
  while (l !== r) {
    if (height[l] < height[r]) {
      has = height[l] * (r - l);
      if (has > max) max = has;
      ++l;
    } else {
      has = height[r] * (r - l);
      if (has > max) max = has;
      --r;
    }
  }
  return max;
};