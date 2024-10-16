type HeapItem = [number, string];

class Heap {
  static push(heap: HeapItem[], val: HeapItem): void {
    heap.push(val)
    let i = heap.length - 1;
    while (i) {
      const t = i - 1 >>> 1;
      if (i === t || heap[t][0] >= heap[i][0]) break;
      [heap[i], heap[t]] = [heap[t], heap[i]];
      i = t;
    }
  }
  static pop(heap: HeapItem[]): void {
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    if (heap.length > 1) this.sink(heap, 0);
  }
  static sink(heap: HeapItem[], i: number): void {
    if (i < heap.length - 1) while (true) {
      let t = i,
          l = t * 2 + 1,
          r = t * 2 + 2;
      if (l < heap.length && heap[t][0] < heap[l][0]) t = l;
      if (r < heap.length && heap[t][0] < heap[r][0]) t = r;
      if (t === i) break;
      [heap[i], heap[t]] = [heap[t], heap[i]];
      i = t;
    }
  }
}

function longestDiverseString(a: number, b: number, c: number): string {
  const heap: HeapItem[] = [],
        stash: Record<string, HeapItem> = {};
  if (a) Heap.push(heap, [a, 'a']);
  if (b) Heap.push(heap, [b, 'b']);
  if (c) Heap.push(heap, [c, 'c']);
  let s = '';
  while (heap.length) {
    const item = heap[0];
    s += item[1];
    item[0]--;
    if (s.at(-2) === item[1]) {
      // it's duplicate letter, move to stash
      Heap.pop(heap);
      if (item[0]) stash[item[1]] = item;
    } else {
      // update counter in heap
      item[0] ? Heap.sink(heap, 0) : Heap.pop(heap);
      // duplicate resolved, move from stash
      if (stash.hasOwnProperty(s.at(-2))) {
        Heap.push(heap, stash[s[s.length - 2]]);
        delete stash[s[s.length - 2]];
      }
    }
  }
  return s;
};