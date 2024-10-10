function thirdMax(nums: number[]): number {
  const max: number[] = [];
  for (let num of nums) {
    for (let i = 0; i < 3; i++) {
      if (max[i] === undefined) {
        max[i] = num;
        break;
      } else if (max[i] === num) {
        break;
      } if (max[i] < num) {
        max.splice(i, 0, num);
        if (max.length > 3) max.pop();
        break;
      }
    }
  }
  return max[2] !== undefined ? max[2] : max[0];
};