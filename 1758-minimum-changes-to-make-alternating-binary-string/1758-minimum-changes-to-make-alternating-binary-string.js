/**
 * @param {string} s
 * @return {number}
 */
const minOperations = (s) => {
    let n = 0, l = s[0];
    for (let i = 1; i < s.length; ++i) {
        if (l === s[i]) {
            l = s[i] === '1' ? '0' : '1';   
            ++n;
        } else {
            l = s[i];
        }
    }
    return Math.min(n, s.length - n);
};
