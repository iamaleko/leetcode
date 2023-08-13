/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '' || haystack === needle) return 0;
    const len = needle.length;
    const max = haystack.length - len + 1;
    for (let i = 0; i < max; i++) {
        if (needle === haystack.substr(i, len)) {
            return i;
        }
    }
    return -1;
};