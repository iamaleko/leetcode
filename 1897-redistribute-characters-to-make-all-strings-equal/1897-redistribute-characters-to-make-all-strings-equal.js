/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = (words) => {
    const ind = new Array(26).fill(0), len = words.length;
    words = words.join('');
    let a = 0;
    for (; a < words.length; ++a) ++ind[words.charCodeAt(a) - 97];
    console.log(words, ind)
    for (a = 0; a < 26; ++a) if (ind[a] && ind[a] % len !== 0) return false;
    
    return true;
};