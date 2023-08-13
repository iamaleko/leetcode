/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    let i = digits.length;
    while (i--) {
        if (digits[i] < 9) {
            ++digits[i];
            return digits;
        } else {
            digits[i] = 0;   
        }
    }
    digits.unshift(1);
    return digits;
};