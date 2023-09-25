class NumArray {
  #nums = [0];
  constructor(nums) {
    for (const num of nums) {
      this.#nums.push(num + this.#nums.at(-1));
    }
  }
  sumRange(l, r) {
    return this.#nums[++r] - this.#nums[l];
  }
}
