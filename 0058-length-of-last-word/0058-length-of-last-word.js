/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
    s = s.split('');
    let r = 0, l = s.length;
    while (l--) {
        if (r) {
            if (s[l] === ' ') return r - l;   
        } else {
            if (s[l] !== ' ') r = l;    
        }
    }
    return r + 1;
};