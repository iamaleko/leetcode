function hasSameDigits(s: string): boolean {
  const arr = s.split('').map(Number);
  let l = 0, r = arr.length;
  while (r > 2) {
    while (l + 1 < r) {
      arr[l] = (arr[l] + arr[l + 1]) % 10;
      l++;
    }
    l = 0;
    r--;
  }
  return arr[0] === arr[1];
};