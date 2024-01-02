/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = (nums) => {
    const map = new Map();
    for (const num of nums) num in map ? ++map[num] : (map[num] = 1);
    const res = [];
    for (const num in map) {
        let i = 0;
        while (map[num]) {
            if (res[i]) {
                res[i].push(num);
            } else {
                res[i] = [num];
            }
            ++i;
            --map[num];
        }
    }
    return res;
};