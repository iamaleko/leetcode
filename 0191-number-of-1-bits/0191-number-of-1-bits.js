const hammingWeight = (n) => {
    if (n === 0) return 0;
    let num = 0;
    while (n) {
        num += n & 1;
        n = n >>> 1;
    }
    return num;
};