/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = (a, b) => {
    a = new Set(a);
    b = new Set(b);
    const res = [];
    for (const n of b) if (a.has(n)) res.push(n);
    return res;
};