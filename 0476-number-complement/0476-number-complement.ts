function findComplement(num: number): number {
  let xor = 0;
  while (xor < num) xor = (xor << 1) | 1;
  return num ^ xor;
};

// function findComplement(num: number): number {
//   let pos = 0, res = 0;
//   while (num) {
//     res |= (num & 1 ^ 1) << pos++;
//     num >>= 1;
//   }
//   return res;
// };