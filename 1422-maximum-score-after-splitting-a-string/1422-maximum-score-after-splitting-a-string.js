/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
    const a = new Array(s.length + 1).fill(0);
    let m = 0, l = 0, r = 0, i = 0, j = s.length;
    while (i < s.length) {
        m = Math.max(m, a[i] += s[i++] === '0' ? l++ : l, a[j] += s[j-- - 1] === '1' ? r++ : r)
    }
    return m;
};