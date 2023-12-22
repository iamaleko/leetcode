/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (a, b) => {
    let n;
    const m = {}, r = [];
    for (n of b) n in m ? ++m[n] : m[n] = 1;
    for (n of a) if (n in m && --m[n] > -1) r.push(n);
    return r;
};