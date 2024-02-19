// const isPowerOfTwo = (n) => Math.log2(n) % 1 === 0;
// const isPowerOfTwo = (n) => n > 0 && !(n & n - 1);
const isPowerOfTwo = (n) => !(n & n - (n > 0));