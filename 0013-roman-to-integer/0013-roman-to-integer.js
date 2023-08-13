/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
    const map = {
        'CM': 900,
        'CD': 400,
        'XC': 90,
        'XL': 40,
        'IX': 9,
        'IV': 4,
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1,
    }
    return s.split(/(CM|CD|XC|XL|IX|IV|M|D|C|L|X|V|I)/g).reduce((sum, e) => e ? sum + map[e] : sum, 0);
}