class Heap {
  constructor(comp) {
    this.heap = [];
    this.comparator = (a, b) => comp(this.heap[a], this.heap[b]) > 0;
  }
  push(n) {
    this.heap.push(n);
    this.bubble(this.heap.length - 1);
  }
  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    } else {
      let res = this.heap[0];
      this.heap[0] = this.heap.pop();
      this.sink(0);
      return res;
    }
  }
  bubble(i) {
    let p = i >>> 1;
    if (this.comparator(i, p)) {
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      this.bubble(p);
    }
  }
  sink(i) {
    let l = i * 2 + 1,
        r = i * 2 + 2,
        s = i;
    if (this.comparator(l, s)) s = l;
    if (this.comparator(r, s)) s = r;
    if (s !== i) {
      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
      this.sink(s);
    }
  }
}

const thirdMax = (nums) => {
  let heap = new Heap((a, b) => a - b);
  for (const num of nums) heap.push(num);
  let i = 1, max = heap.pop(), res = max;
  while (true) {
    let max = heap.pop();
    if (max === undefined) break;
    if (max !== res) {
      res = max;
      if (++i === 3) return res;
    }
  }
  return max;
};