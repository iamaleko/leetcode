/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
    let m = 2;
    while ((m|0) !== ((m = (m + x / m) / 2)|0));
    return m|0;
}