/**
 * @param {number[]} nums
 * @return {number}
 */
const minOperations = (nums) => {
    const map = new Map();
    for (const num of nums) map[num] = (map[num] || 0) + 1;
    let res = 0;
    for (const num in map) {
        if (map[num] === 1) return -1;
        res += Math.ceil(map[num] / 3);
    }
    return res;
};