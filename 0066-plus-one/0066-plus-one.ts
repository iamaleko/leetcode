function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = 0;
    if (digits[i] > 9) {
      carry = digits[i] / 10 | 0;
      digits[i] %= 10;
    }
    if (!carry) break;
  }
  if (carry) digits.unshift(carry);
  return digits;
};