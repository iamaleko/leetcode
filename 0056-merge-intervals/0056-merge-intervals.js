/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (intervals) => {
    intervals.sort((a,b) => a[0] - b[0]);
    const res = [];
    let p = -1;
    for (const int of intervals) {
        if (p > -1 && res[p][1] >= int[0]) {
            if (res[p][1] < int[1]) {
                res[p][1] = int[1];
            }
        } else {
            res.push(int);
            ++p;
        }
    }
    return res;
};