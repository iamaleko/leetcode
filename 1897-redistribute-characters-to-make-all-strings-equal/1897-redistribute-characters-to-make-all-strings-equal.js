/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = (words) => {
    const ind = new Array(26).fill(0), len = words.length;
    let a = 0, b = 0;
    for (; a < len; ) {
        if (b < words[a].length) {
            ++ind[words[a][b++].charCodeAt(0) - 97];
        } else {
            b = 0;
            ++a;
        }
    }
    
    for (a = 0; a < 26; ++a) if (ind[a] && ind[a] % len !== 0) return false;
    
    return true;
};