// forbiddance of permutation of particular pairs breaks the logic of sorting
// function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
//   nums.sort((a: number, b: number) => {
//     if (a === b || Math.abs(a - b) > limit) return 0;
//     return a - b
//   });
//   return nums;
// };

function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  // split into backward sorted groups and build group index
  const sorted = nums.slice();
  sorted.sort((a, b) => b - a);
  const groups: number[][] = [[sorted[0]]];
  const index = { [sorted[0]]: 0 }
  for (let i = 1; i < sorted.length; i++) {
    if (groups.at(-1).at(-1) - sorted[i] <= limit) {
      groups.at(-1).push(sorted[i]);
    } else {
      groups.push([sorted[i]]);
    }
    index[sorted[i]] = groups.length - 1
  }
  // replace elements in input array
  for (let i = 0; i < nums.length; i++) {
    nums[i] = groups[index[nums[i]]].pop()
  }
  return nums;
};