function intersection(nums1: number[], nums2: number[]): number[] {
  const a = new Set(nums1),
        b = new Set(nums2);
  const ans = [];
  for (const num of b) if (a.has(num)) ans.push(num);
  return ans;
};