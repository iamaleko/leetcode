type HeapNode = number[];
class Heap {
  static push(heap: HeapNode[], item: HeapNode): void {
    heap.push(item);
    if (heap.length > 1) {
      let i = heap.length - 1, t: number;
      while (i) {
        t = i - 1 >>> 1;
        if (t === i || heap[t][0] <= heap[i][0]) break;
        [heap[t], heap[i]] = [heap[i], heap[t]];
        i = t;
      }
    }
  }
  static pop(heap: HeapNode[]): HeapNode | null {
    if (heap.length > 1) {
      [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
      let i = 0, l:number, r:number, t:number;
      while (true) {
        l = i * 2 + 1;
        r = i * 2 + 2;
        t = i;
        if (l < heap.length - 1 && heap[t][0] > heap[l][0]) t = l;
        if (r < heap.length - 1 && heap[t][0] > heap[r][0]) t = r;
        if (t === i) break;
        [heap[t], heap[i]] = [heap[i], heap[t]];
        i = t;
      }
    }
    return heap.pop() || null;
  }
}

function smallestRange(nums: number[][]): number[] {
  const heap: HeapNode[] = [];
  const n = nums.length;

  // add nums to heap
  for (let i = 0; i < n; i++) Heap.push(heap, [nums[i][0], i, 1]);

  // iterate using window
  const represented = new Array(n).fill(0);
  let lower = Number.MIN_SAFE_INTEGER,
      upper = Number.MAX_SAFE_INTEGER,
      missed = nums.length,
      sorted: [number, number][] = [],
      l = 0;

  while (heap.length) {
    const [num, i, p] = Heap.pop(heap);
    sorted.push([num, i]);
    if (represented[i]++ === 0) missed--;
    while (!missed) {
      if (upper - lower > num - sorted[l][0]) {
        upper = num
        lower = sorted[l][0]
      }
      if (represented[sorted[l][1]]-- === 1) missed++;
      l++;
    }
    if (p < nums[i].length) Heap.push(heap, [nums[i][p], i, p + 1]);
  }

  return [lower, upper];
};

// O(n log n), sorting + sliding window, PASS 83ms
// function smallestRange(nums: number[][]): number[] {
//   // create sorted points structure
//   const m = new Map<number, Set<number>>();
//   for (let i = 0; i < nums.length; i++) {
//     for (const num of nums[i]) {
//       if (m.has(num)) {
//         m.get(num).add(i);
//       } else {
//         m.set(num, new Set([i]));
//       }
//     }
//   }
//   const points = Array.from(m.entries());
//   points.sort((a, b) => a[0] - b[0]);

//   // iterate using window
//   const represented = new Array(nums.length).fill(0);
//   let lower = points[0][0],
//       upper = points[points.length - 1][0],
//       missed = nums.length;

//   for (let l = 0, r = 0; r < points.length; r++) {
//     // single point edge case
//     if (points[r][1].size === nums.length) return [points[r][0], points[r][0]]; 

//     for (const i of points[r][1]) if (represented[i]++ === 0) missed--;
//     while (!missed) {
//       if (upper - lower > points[r][0] - points[l][0]) {
//         upper = points[r][0]
//         lower = points[l][0]
//       }
//       for (const i of points[l][1]) if (represented[i]-- === 1) missed++;
//       l++;
//     }
//   }

//   return [lower, upper];
// };