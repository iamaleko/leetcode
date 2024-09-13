function xorQueries(arr: number[], queries: number[][]): number[] {
  for (let i = 1; i < arr.length; i++) arr[i] ^= arr[i - 1];
  const ans: number[] = [];
  for (const [l, r] of queries) ans.push((l ? arr[l - 1] : 0) ^ arr[r]);
  return ans;
};