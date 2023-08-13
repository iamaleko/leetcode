/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = (n) => {
    const ls = [];
    for (let i = 0; i < n;) {
        const s = Math.ceil(++i / 2),
              l = [1];
        for (let q = 1; q < s;) l[q] = ls[i-2][q] + ls[i-2][q++ - 1];
        ls.push(l.concat(l.slice(0, i - s).reverse()))
    }
    return ls;
};


