/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findMatrix = (nums) => {
    const map = new Map();
    let max = 1, num;
    for (num of nums) {
        if (num in map) {
            if (max < ++map[num]) max = map[num];
        } else {
            map[num] = 1   
        }
    }
    const res = new Array(max).fill().map(() => []);
    for (num in map) {
        let i = 0;
        while (map[num]--) res[i++].push(num);
    }
    return res;
};