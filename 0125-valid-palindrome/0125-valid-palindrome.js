/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return s === s.split('').reverse().join('');
};