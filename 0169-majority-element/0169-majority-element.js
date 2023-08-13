/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    let aVal = null, aRep = 0, bVal = null, bRep = 0, val = null, rep = 0;
    for (const num of nums) {
        if (num === val) {
            ++rep;
        } else {
            if (aVal === val) {
                aRep += rep;
            } else if (bVal === val) {
                bRep += rep;
            } else if (aRep < rep && bVal !== null) {
                aVal = val;
                aRep = rep;
            } else if (bRep < rep) {
                bVal = val;
                bRep = rep;
            }
            val = num;
            rep = 1;
        }
    }
    if (aVal === val) {
        aRep += rep;
    } else if (bVal === val) {
        bRep += rep;
    } else if (aRep < rep && bVal !== null) {
        aVal = val;
        aRep = rep;
    } else if (bRep < rep) {
        bVal = val;
        bRep = rep;
    }
    return bRep === null || aRep > bRep ? aVal : bVal;
};