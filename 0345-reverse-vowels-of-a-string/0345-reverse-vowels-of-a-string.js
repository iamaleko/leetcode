/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
    const vovels = new Set(['a','A','e','E','i','I','o','O','u','U'])
    let v = [];
    s = s.split('');
    for (const i in s) {
        if (vovels.has(s[i])) {
            v.push(s[i])
            s[i] = undefined;
        }
    }
    v.reverse();
    let j = 0;
    for (const i in s) {
        if (s[i] === undefined) {
            s[i] = v[j++];
        }
    }
    return s.join('');
};