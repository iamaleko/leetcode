/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = (words) => {
    const ind = new Array(26).fill(0);
    let a = 0, b = 0;
    for (; a < words.length; ) {
        if (b < words[a].length) {
            ++ind[words[a][b].charCodeAt(0) - 97];
            ++b;
        } else {
            b = 0;
            ++a;
        }
    }
    
    for (a = 0; a < 26; ++a) if (ind[a] && ind[a] % words.length !== 0) return false;
    
    return true;
};