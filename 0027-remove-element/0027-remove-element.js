/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = (nums, val) => {
    let pointer = 0;
    for (let i in nums) {
        if (nums[i] !== val) {
            nums[pointer++] = nums[i]
        }
    }
    return pointer;
};