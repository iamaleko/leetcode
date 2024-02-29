
class RecentCounter {
  constructor() {
    this.ts = [];
  }
  ping(t) {
    this.ts.push(t + 3000);
    let l = 0, r = this.ts.length - 2, c;
    while (l <= r) {
      c = l + r >> 1;
      if (this.ts[c] < t) {
        l = c + 1;
      } else {
        r = c - 1;
      }
    }
    return this.ts.length - l;
  }
};