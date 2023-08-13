/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = n => n.reduce((a, e) => a ^ e);


