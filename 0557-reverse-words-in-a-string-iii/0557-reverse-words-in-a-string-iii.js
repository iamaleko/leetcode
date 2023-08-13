/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = (s) => {
    const rev = (s, l, r) => {
        while (++l < --r) [s[l], s[r]] = [s[r], s[l]];
    }
    let r, l = -1;
    
    s = s.split('');
    
    for (r in s) {
        if (s[r] === ' ') {
            rev(s, l, r);
            l = r;
        }
    }
    rev(s, l, s.length);
    
    
    return s.join('');
};