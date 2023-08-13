/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let diff = 0, min = Infinity;
    for (const p of prices) {
        if (p - min > diff) {diff = p - min;} else if (p < min) min = p;
    }
    return diff;
};