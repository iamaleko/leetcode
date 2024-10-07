function intersect(nums1: number[], nums2: number[]): number[] {
  const m: Record<number, number> = {};
  for (const num of nums1) {
    if (!m.hasOwnProperty(num)) m[num] = 0;
    m[num]++;
  }
  let ans = [];
  for (const num of nums2) {
    if (m.hasOwnProperty(num) && m[num]-- > 0) ans.push(num); 
  }
  return ans;
};