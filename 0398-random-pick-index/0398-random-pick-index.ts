class Solution {
  index: Map<number, number[]>;
  constructor(nums: number[]) {
    this.index = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (!this.index.has(nums[i])) this.index.set(nums[i], []);
      this.index.get(nums[i]).push(i);
    }
  }
  pick(target: number): number {
    const arr = this.index.get(target);
    return arr[Math.floor(Math.random() * arr.length)];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */