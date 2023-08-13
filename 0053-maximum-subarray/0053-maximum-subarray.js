/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let sum = 0, max = -Infinity, i = 0;
    for (;i < nums.length;) {
        sum += nums[i++]
        if (max < sum) max = sum;
        if (sum < 0) sum = 0;
    }
    return max;
};