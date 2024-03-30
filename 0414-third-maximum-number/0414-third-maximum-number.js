class Heap {
  constructor(comp) {
    this.heap = [];
    this.comparator = comp;
    this.min = 0;
  }
  push(n) {
    this.heap.push(n);
    this.heapify(this.heap.length - 1);
  }
  pop() {
    if (this.min === this.heap.length) return undefined;
    let res = this.heap[this.heap.length - 1];
    this.heap[this.heap.length - 1] = this.heap[this.min];
    this.heap[this.min] = undefined;
    this.min++;
    this.heapify(this.heap.length - 1);
    return res;
  }
  heapify(i) {
    if (this.heap[i] === undefined) return;
    let l = this.heap.length - (((this.heap.length - i - 1) * 2) + 1) - 1,
        r = this.heap.length - (((this.heap.length - i - 1) * 2) + 2) - 1,
        s = i;
    if (l >= this.min && this.comparator(this.heap[l], this.heap[s])) s = l;
    if (r >= this.min && this.comparator(this.heap[r], this.heap[s])) s = r;
    if (s !== i) {
      [this.heap[i], this.heap[s]] = [this.heap[s], this.heap[i]];
      this.heapify(s);
    }
  }
}

const thirdMax = (nums) => {
  let heap = new Heap((a, b) => a > b);
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