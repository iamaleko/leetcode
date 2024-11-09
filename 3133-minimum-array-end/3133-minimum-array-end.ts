// Tips (but i'v almost got it myself)
function minEnd(n: number, x: number): number {
  const bits: number[] = [];
  n--;
  while (x || n) {
    if (x & 1) {
      bits.push(1);
    } else {
      bits.push(n & 1);
      n >>=1;
    }
    x >>= 1;
  }
  return parseInt(bits.reverse().join(''), 2);
};

// Math TLE
// function minEnd(n: number, x: number): number {
//   let num = x, int32 = 2 ** 31;
//   for (let i = 1; i < n; i++) {
//     num++;
//     if (num > int32 - 1) {
//       num = Math.trunc(num / int32) * int32 + (num & int32 - 1 | x);
//     } else {
//       num |= x;
//     }
//   }
//   return num;
// };


