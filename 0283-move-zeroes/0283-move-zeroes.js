const moveZeroes = (nums) => {
    let s = 0;
    for (let i in nums) {
        if (nums[i] === 0) {
            ++s;
        } else if (s) {
            nums[i - s] = nums[i];
            nums[i] = 0;
        }
    }
    return nums;
};