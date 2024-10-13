function smallestRange(nums: number[][]): number[] {
  // create sorted points structure
  const m = new Map<number, Set<number>>();
  for (let i = 0; i < nums.length; i++) {
    for (const num of nums[i]) {
      if (m.has(num)) {
        m.get(num).add(i);
      } else {
        m.set(num, new Set([i]));
      }
    }
  }
  const points = Array.from(m.entries());
  points.sort((a, b) => a[0] - b[0]);

  // iterate using window
  const represented = new Array(nums.length).fill(0);
  let lower = points[0][0],
      upper = points[points.length - 1][0],
      missed = nums.length;

  for (let l = 0, r = 0; r < points.length; r++) {
    // single point edge case
    if (points[r][1].size === nums.length) return [points[r][0], points[r][0]]; 

    for (const i of points[r][1]) if (represented[i]++ === 0) missed--;
    while (!missed) {
      if (upper - lower > points[r][0] - points[l][0]) {
        upper = points[r][0]
        lower = points[l][0]
      }
      for (const i of points[l][1]) if (represented[i]-- === 1) missed++;
      l++;
    }
  }

  return [lower, upper];
};