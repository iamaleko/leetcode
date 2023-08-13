// const reverseBits = (n) => parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);

const reverseBits = (n) => {
    let r = 0, p = 32;
    while (p--) {
        if (n & Math.pow(2, p)) r |= Math.pow(2, 31 - p);
    }
    return r >>> 0;
}

// const reverseBits = (n) => {
//     let r = 0, p = 32;
//     while (p--) {
//         r = r << 1;
//         r |= n & 1;
//         n = n >> 1;
//     }
//     return r >>> 0;
// }