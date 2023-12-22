/**
 * @param {string} s
 * @return {number}
 */
const maxScore = (s) => {
    const arr = new Array(s.length + 1).fill(0);
    let m = 0;
    for (let a = 0, b = 0, i = 0, j = s.length; i < s.length; ++i, --j) {
        if (m < (arr[i] += s[i] === '0' ? a++ : a)) m = arr[i];
        if (m < (arr[j] += s[j - 1] === '1' ? b++ : b)) m = arr[j];
    }
    return m;
};