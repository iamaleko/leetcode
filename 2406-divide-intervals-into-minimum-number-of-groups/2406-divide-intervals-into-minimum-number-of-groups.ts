type HeapNode = [number, ...number[]];
class Heap {
  static push(heap: HeapNode[], item: HeapNode): void {
    heap.push(item);
    let i = heap.length - 1;
    while (i) {
      const p = i - 1 >>> 1;
      if (p === i || heap[p][0] <= heap[i][0]) break;
      [heap[p], heap[i]] = [heap[i], heap[p]];
      i = p;
    }
  }
  static pop(heap: HeapNode[]): HeapNode | null {
    if (!heap.length) return null;
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    let i = 0;
    while (true) {
      const l = i * 2 + 1,
            r = i * 2 + 2;
      let t = i;
      if (l < heap.length - 1 && heap[t][0] > heap[l][0]) t = l;
      if (r < heap.length - 1 && heap[t][0] > heap[r][0]) t = r;
      if (t === i) break;
      [heap[t], heap[i]] = [heap[i], heap[t]];
      i = t;
    }
    return heap.pop();
  }
}

function minGroups(intervals: number[][]): number {
  if (!intervals.length) return 0;

  intervals.sort((a, b) => a[0] - b[0]);
  const heap: HeapNode[] = [];
  let groups = 0;
  for (const [from, to] of intervals) {
    if (heap.length && heap[0][0] < from) { // extend group
      Heap.pop(heap);
      Heap.push(heap, [to]);
    } else { // create new group
      groups++;
      Heap.push(heap, [to]);
    }
  }

  return groups;
};