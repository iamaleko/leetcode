/**
 * @param {string[]} words
 * @return {boolean}
 */
const makeEqual = (words) => {
    const map = new Map();
    for (const word of words) {
        for (const char of word) {
            char in map ? ++map[char] : (map[char] = 1);
        }
    }
    
    for (const key in map) {
        if (map[key] % words.length !== 0) return false;
    }
    
    return true;
};