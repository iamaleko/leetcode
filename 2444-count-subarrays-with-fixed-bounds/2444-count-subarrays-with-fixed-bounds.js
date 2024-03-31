class Heap {
    constructor(comp) {
      this.comparator = comp;
      this.map = new Map();
      this.heap = [];
    }
    add(el) {
      this.heap.push(el);
      this.map.set(el, this.heap.length - 1);
      this.bubble(this.heap.length - 1);
    }
    remove(el) {
      const i = this.map.get(el);
      if (i !== this.heap.length - 1) {
        this.swap(i, this.heap.length - 1);
      }
      this.heap.pop();
      this.map.delete(el);
      this.sink(i);
    }
    bubble(i) {
      const pi = i >>> 1;
      if (pi !== i && this.comparator(this.heap[i], this.heap[pi])) {
        this.swap(i, pi);
        this.bubble(pi);
      }
    }
    sink(i) {
      const li = i * 2 + 1;
      const ri = i * 2 + 2;
      let si = i;
      if (ri < this.heap.length && this.comparator(this.heap[ri], this.heap[si])) si = ri;
      if (li < this.heap.length && this.comparator(this.heap[li], this.heap[si])) si = li;
      if (si !== i) {
        this.swap(i, si);
        this.sink(si);
      }
    }
    swap(a,b) {
      this.map.set(this.heap[a], b);
      this.map.set(this.heap[b], a);
      const tmp = this.heap[a];
      this.heap[a] = this.heap[b];
      this.heap[b] = tmp;
    }
    peek() {
      return this.heap[0];
    }
}

const countSubarrays = (nums, minK, maxK) => {
  const sw = (minK, maxK) => {
    let l = 0, res = 0;
    const maxh = new Heap((a,b) => nums[a] > nums[b]),
          minh = new Heap((a,b) => nums[a] < nums[b]);
    for (let r = 0; r < nums.length; r++) {
      minh.add(r);
      maxh.add(r);
      while (
        (minh.peek() !== undefined && nums[minh.peek()] < minK) ||
        (maxh.peek() !== undefined && nums[maxh.peek()] > maxK)
      ) {
        minh.remove(l);
        maxh.remove(l);
        l++;
      }
      if (l <= r) res += r - l + 1;
    }
    return res;
  }

  return sw(minK, maxK) - sw(minK + 1, maxK) - sw(minK, maxK - 1) + sw(minK + 1, maxK - 1);
};