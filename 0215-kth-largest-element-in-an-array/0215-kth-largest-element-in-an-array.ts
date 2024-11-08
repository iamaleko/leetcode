function findKthLargest(nums: number[], k: number): number {
  const heap: number[] = [];
  const push = (num: number) => {
    heap.push(num);
    let i = heap.length - 1;
    while (i) {
      let t = i - 1 >>> 1;
      if (heap[t] <= heap[i]) break;
      [heap[t], heap[i], i] = [heap[i], heap[t], t];
    }
  }
  const pushpop = (num: number) => {
    heap[0] = num;
    let i = 0;
    while (true) {
      let l = i * 2 + 1,
          r = i * 2 + 2,
          t = i;
      if (l < heap.length && heap[l] < heap[t]) t = l;
      if (r < heap.length && heap[r] < heap[t]) t = r;
      if (t === i) break;
      [heap[t], heap[i], i] = [heap[i], heap[t], t];
    }
  }
  nums.push(Number.MAX_SAFE_INTEGER);
  for (const num of nums) heap.length > k ? pushpop(num) : push(num);
  return heap[0];
};