/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (a, b) => {
    const m = {};
    for (const n of b) n in m ? ++m[n] : m[n] = 1;
    const r = [];
    for (const n of a) if (n in m && m[n]) r.push(n), --m[n];
    return r;
};