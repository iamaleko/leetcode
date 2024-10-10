function plusOne(digits: number[]): number[] {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + carry > 9) {
      carry = (digits[i] + carry) / 10 | 0;
      digits[i] = (digits[i] + carry) % 10;
    } else {
      digits[i] += carry;
      return digits;
    }
  }
  if (carry) digits.unshift(carry);
  return digits;
};