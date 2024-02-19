// const isPowerOfTwo = (n) => Math.log2(n) % 1 === 0;
// const isPowerOfTwo = (n) => n > 0 && !(n & n - 1);
// const isPowerOfTwo = (n) => n > 0 && !(n & --n);
// const isPowerOfTwo = (n, b = 0) => {
//   while (n > 0) n &= n - 1, ++b;
//   return b === 1;
// }
const isPowerOfTwo = (n) => {
  if (n > 0) while ((n = n / 2) % 1 === 0);
  return n === 0.5;
}