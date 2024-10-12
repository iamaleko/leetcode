type HeapNode = number;
class Heap {
  static push(heap: HeapNode[], item: HeapNode): void {
    heap.push(item);
    let i = heap.length - 1;
    while (i) {
      const p = i - 1 >>> 1;
      if (p === i || heap[p] <= heap[i]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }
  static poppush(heap: HeapNode[], item: HeapNode): void {
    heap[0] = item;
    let i = 0;
    while (true) {
      const l = i * 2 + 1,
            r = i * 2 + 2;
      let t = i;
      if (l < heap.length && heap[t] > heap[l]) t = l;
      if (r < heap.length && heap[t] > heap[r]) t = r;
      if (t === i) break;
      [heap[t], heap[i]] = [heap[i], heap[t]];
      i = t;
    }
  }
}

function minGroups(intervals: number[][]): number {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[0] - b[0]);
  const heap: HeapNode[] = [intervals[0][1]];
  for (let i = 1; i < intervals.length; i++) {
    if (heap[0] < intervals[i][0]) {
      Heap.poppush(heap, intervals[i][1]);
    } else {
      Heap.push(heap, intervals[i][1]);
    }
  }
  return heap.length;
};