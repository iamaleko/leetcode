/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = (s) => {
    const set = new Set([97, 101, 105, 111, 117, 65, 69, 73, 79, 85]), half = s.length / 2;
    let count = 0;
    for (let i = 0; i < half; ++i) {
        if (set.has(s.charCodeAt(i))) ++count;
        if (set.has(s.charCodeAt(i + half))) --count;
    }
    return count === 0;
};