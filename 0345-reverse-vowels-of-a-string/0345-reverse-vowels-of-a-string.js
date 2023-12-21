/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vovels = new Set(['a','A','e','E','i','I','o','O','u','U'])
    s = s.split('');
    let l = 0, r = s.length - 1, li, ri;
    while (l <= r || li !== undefined && ri !== undefined) {
        if (li !== undefined) {
            if (ri !== undefined) {
                [s[li], s[ri]] = [s[ri], s[li]];
                li = undefined;
                ri = undefined;
            } else if (vovels.has(s[r])) {
                ri = r--;
            } else {
                --r;   
            }
        } else if (vovels.has(s[l])) {
            li = l++;
        } else {
            ++l;   
        }
    }
    return s.join('');
};