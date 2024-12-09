function isArraySpecial(nums: number[], queries: number[][]): boolean[] {
  const index = new Array(nums.length).fill(0);
  let l = 0;
  for (let r = 1; r < nums.length; r++) {
    if (nums[r] % 2 === nums[r - 1] % 2) l = r;
    index[r] = l;
  }
  const ans = new Array(queries.length).fill(false);
  for (let i = 0; i < queries.length; i++) {
    if (index[queries[i][1]] <= queries[i][0]) ans[i] = true;
  }
  return ans;
};