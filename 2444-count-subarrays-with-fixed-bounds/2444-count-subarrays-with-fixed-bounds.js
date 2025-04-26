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
      let p;
      while (true) {
        p = i >>> 1;
        if (p === i || !this.comparator(this.heap[i], this.heap[p])) return;
        this.swap(i, p);
        i = p;
      }
    }
    sink(i) {
      let l, r, t; 
      while (true) {
        l = i * 2 + 1;
        r = i * 2 + 2;
        t = i;
        if (r < this.heap.length && this.comparator(this.heap[r], this.heap[t])) t = r;
        if (l < this.heap.length && this.comparator(this.heap[l], this.heap[t])) t = l;
        if (t === i) return;
        this.swap(i, t);
        i = t;
      }
    }
    swap(a, b) {
      this.map.set(this.heap[a], b);
      this.map.set(this.heap[b], a);
      [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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
      while (nums[minh.peek()] < minK || nums[maxh.peek()] > maxK) {
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