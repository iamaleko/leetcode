/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  candidates.sort((a, b) => a - b);
  const res = [];
  const choose = (pos, sum, arr) => {
    sum += candidates[pos];
    arr = arr.slice();
    arr.push(candidates[pos]);

    if (sum === target) {
      res.push(arr);
      return;
    }

    while (candidates[pos] <= target - sum) {
      choose(pos++, sum, arr)
    }
  }
  for(const pos in candidates) {
    choose(pos, 0, []);
  }
  return res;
};