/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = (int) => {
    if (int.length <= 1) return int;
    
    int.sort((a, b) => a[0] - b[0]);
    
    let p = 0;
    
    for (let i = 1; i < int.length; ++i) {
        if (int[p][1] >= int[i][0]) {
            if (int[p][1] < int[i][1]) int[p][1] = int[i][1];
            int[i] = undefined;
        } else {
            p = i;
        }
    }
    
    return int.filter(e => e);
};