/**
 * @param {string} s
 * @return {number}
 */
const min = -Math.pow(2, 31);
const max = -min - 1;
var myAtoi = function(s) {
    let res = '';
    let sign = '';
    for (let char of s) {
        if (res === '' && sign === '' && char === ' ') {
            continue;
        } else if (res === '' && sign === '' && char === '-') {
            sign = '-';
        } else if (res === '' && sign === '' && char === '+') {
            sign = '+';
        } else if (['0','1','2','3','4','5','6','7','8','9'].includes(char)) {
            res += char;
        } else {
            break;   
        }
    }
    return res ? Math.max(Math.min(Number(sign + res), max), min) : 0;
};