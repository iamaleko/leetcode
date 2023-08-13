/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    a = a.split('').reverse()
    b = b.split('').reverse()
    const m = Math.max(a.length, b.length);
    for (let i = 0; i < m;) {
        switch ((a[i]|0) + (b[i]|0)) {
            case 0:
                a[i++] = 0;
                break;
            case 1:
                a[i++] = 1;
                break;
            case 2:
                a[i++] = 0;
                a[i] = (a[i]|0) + 1;
                break;
            case 3:
                a[i++] = 1;
                a[i] = (a[i]|0) + 1;
                break;
        } 
    }
    return a.reverse().join('');
};