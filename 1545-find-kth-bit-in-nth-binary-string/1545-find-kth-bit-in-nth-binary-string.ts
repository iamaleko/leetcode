function findKthBit(n: number, k: number): string {
  let arr = ['0'], i: number;
  while (n--) {
    i = arr.length;
    arr.push('1');
    while (i--) {
      arr.push(arr[i] === '0' ? '1' : '0');
      if (arr.length === k) return arr[k - 1];
    }
  }
  return arr[k - 1];
};