function validPalindrome(s: string): boolean {
  const check = (l: number, r: number, skip: boolean = false) => {
    while (l < r) {
      if (s[l] !== s[r]) return skip ? check(l + 1, r) || check(l, r - 1) : false;
      l++;
      r--;
    }
    return true;
  }
  return check(0, s.length - 1, true);
};