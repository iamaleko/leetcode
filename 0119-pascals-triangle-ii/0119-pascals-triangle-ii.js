/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = (rowIndex) => {
    let last = null;
    ++rowIndex;
    for (let i = 0; i < rowIndex;) {
        const s = Math.ceil(++i / 2),
              l = [1];
        for (let q = 1; q < s;) l[q] = last[q] + last[q++ - 1];
        last = l.concat(l.slice(0, i - s).reverse())
    }
    return last;
};