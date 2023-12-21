/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vovels = new Set(['a','A','e','E','i','I','o','O','u','U'])
    s = s.split('');
    let l = 0, r = s.length - 1, li, ri;
    while (l <= r || li && ri) {
        if (li) {
            if (ri) {
                s[l++] = ri;
                s[r--] = li;
                li = undefined;
                ri = undefined;
            } else if (vovels.has(s[r])) {
                ri = s[r];
            } else {
                --r;   
            }
        } else if (vovels.has(s[l])) {
            li = s[l];
        } else {
            ++l;   
        }
    }
    return s.join('');
};