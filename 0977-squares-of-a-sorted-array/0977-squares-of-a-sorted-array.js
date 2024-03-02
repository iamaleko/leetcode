const sortedSquares = (nums) => {
    let i = nums.length - 1, l = 0, r = i, arr = [];
    while (l < r) arr[i--] = -nums[l] > nums[r] ? nums[l] * nums[l++] : nums[r] * nums[r--];
    arr[i] = nums[l] * nums[l];
    return arr;
};