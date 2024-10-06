const solution = function(isBadVersion: any) {
  return function(n: number): number {
    let l = 0, r = n, c: number;
    while (l <= r) {
      c = l + r >>> 1;
      if (!isBadVersion(c)) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return l;
  };
};