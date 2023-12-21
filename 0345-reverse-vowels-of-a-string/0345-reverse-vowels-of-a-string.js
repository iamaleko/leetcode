/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vovels = new Set(['a','A','e','E','i','I','o','O','u','U']);
    let a = '', b = '', l = 0, r = s.length - 1, li, ri;
    while (l <= r || li && ri) {
        if (li) {
            if (ri) {
                a += ri;
                if (l !== r) b = li + b;
                li = undefined;
                ri = undefined;
                ++l;
                --r;
            } else if (vovels.has(s[r])) {
                ri = s[r];
            } else {
                b = s[r--] + b;
            }
        } else if (vovels.has(s[l])) {
            li = s[l];
        } else {
            a += s[l++];
        }
    }
    return a + b;
};