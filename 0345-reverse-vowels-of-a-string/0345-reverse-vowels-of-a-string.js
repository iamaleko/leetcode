/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vovels = new Set(['a','A','e','E','i','I','o','O','u','U']), res = new Array(s.length);
    let l = 0, r = s.length - 1, li, ri;
    while (l <= r || li && ri) {
        if (li) {
            if (ri) {
                res[l++] = ri;
                res[r--] = li;
                li = undefined;
                ri = undefined;
            } else if (vovels.has(s[r])) {
                ri = s[r];
            } else {
                res[r] = s[r--];
            }
        } else if (vovels.has(s[l])) {
            li = s[l];
        } else {
            res[l] = s[l++];
        }
    }
    return res.join('');
};