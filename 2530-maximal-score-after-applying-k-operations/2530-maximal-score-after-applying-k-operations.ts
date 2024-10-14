class MaxHeap {
  static push(heap: number[], val: number): void {
    heap.push(val)
    let i = heap.length - 1;
    while (i) {
      const t = i - 1 >>> 1;
      if (i === t || heap[t] >= heap[i]) break;
      [heap[i], heap[t]] = [heap[t], heap[i]];
      i = t;
    }
  }
  static poppush(heap: number[], val: number): void {
    heap[0] = val;
    if (heap.length === 1) return;
    let i = 0;
    while (true) {
      let t = i,
          l = t * 2 + 1,
          r = t * 2 + 2;
      if (l < heap.length && heap[t] < heap[l]) t = l;
      if (r < heap.length && heap[t] < heap[r]) t = r;
      if (t === i) break;
      [heap[i], heap[t]] = [heap[t], heap[i]];
      i = t;
    }
  }
}
function maxKelements(nums: number[], k: number): number {
  const heap: number[] = [];
  for (const num of nums) MaxHeap.push(heap, num);
  let ans = 0;
  while (heap.length && k) {
    ans += heap[0];
    MaxHeap.poppush(heap, Math.ceil(heap[0] / 3));
    k--;
  }
  return ans;
};