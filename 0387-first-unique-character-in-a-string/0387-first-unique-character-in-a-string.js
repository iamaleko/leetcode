/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
    const m = new Map();
    let mi;
    for (const i in s) {
        if (mi = m.get(s[i])) {
            if (mi > 0) m.set(s[i], -mi);
        } else {
            m.set(s[i], +i + 1);
        }
    }
    for (const [, mi] of m) if (mi > 0) return mi - 1;
    return -1;
};