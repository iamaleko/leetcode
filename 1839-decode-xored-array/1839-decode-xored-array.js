/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function(encoded, first) {
    const arr = [first];
    for (const num of encoded) {
      arr.push(num ^ arr[arr.length - 1]);
    }
    return arr;
};