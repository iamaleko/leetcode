// Bit manipulation above 32 bits limit
function setBitAtPos(mask: number, pos: number, val: number): number {
  return (Math.trunc(mask / 2 ** ++pos) * 2 + val) * 2 ** --pos + mask % 2 ** pos;
}
function minEnd(n: number, x: number): number {
  let ans = 0, pos = 0;
  n--;
  while (x || n) {
    if (x & 1) {
      ans = setBitAtPos(ans, pos++, 1);
    } else {
      ans = setBitAtPos(ans, pos++, n & 1);
      n >>= 1;
    }
    x >>= 1;
  }
  return ans;
};

// Tips (but i'v almost got it myself)
// function minEnd(n: number, x: number): number {
//   const bits: number[] = [];
//   n--;
//   while (x || n) {
//     if (x & 1) {
//       bits.push(1);
//     } else {
//       bits.push(n & 1);
//       n >>= 1;
//     }
//     x >>= 1;
//   }
//   return parseInt(bits.reverse().join(''), 2);
// };

// Math TLE
// function minEnd(n: number, x: number): number {
//   let num = x;
//   for (let i = 1; i < n; i++) {
//     num++;
//     if (num > 2 ** 31 - 1) {
//       num = Math.trunc(num / 2 ** 31) * 2 ** 31 + (num & 2 ** 31 - 1 | x);
//     } else {
//       num |= x;
//     }
//   }
//   return num;
// };


