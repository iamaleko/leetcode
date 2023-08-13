/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    let pointer = 0;
    for (let i in nums) {
        if (nums[i] > nums[pointer]) {
            nums[++pointer] = nums[i]
        }
    }
    return pointer + 1;
};