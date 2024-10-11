type HeapNode = number[];
function heapPop(heap: HeapNode[]): void {
  if (heap.length) {
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    heap.pop();
    if (heap.length > 1) {
      let i = 0;
      while (true) {
        let l = i * 2 + 1,
            r = i * 2 + 2,
            t = i;
        if (l < heap.length && heap[l][0] < heap[t][0]) t = l;
        if (r < heap.length && heap[r][0] < heap[t][0]) t = r;
        if (t === i) break;
        [heap[t], heap[i]] = [heap[i], heap[t]];
        i = t;
      }
    }
  }
}

function heapPush(heap: HeapNode[], item: HeapNode): void {
  heap.push(item);
  let i = heap.length - 1;
  while (i) {
    let p = i - 1 >>> 1;
    if (p === i || heap[p][0] <= heap[i][0]) break;
    [heap[p], heap[i]] = [heap[i], heap[p]];
    i = p;
  }
}

function smallestChair(times: number[][], targetFriend: number): number {
  const chairHeap: HeapNode[] = [];
  const leaveHeap: HeapNode[] = [];

  let chairIndex = 0;
  const sorted = times.map((v, i) => {
    v.push(i);
    return v;
  }).sort((a, b) => a[0] - b[0]);
  
  for (const [from, to, i] of sorted) {
    // check free chairs
    while (leaveHeap.length && leaveHeap[0][0] <= from) {
      const chair = leaveHeap[0][1];
      heapPush(chairHeap, [chair]);
      heapPop(leaveHeap);
    }
    // assign chair
    let chair: number;
    if (chairHeap.length) { // get after friend
      chair = chairHeap[0][0];
      heapPop(chairHeap);
    } else { // get next free
      chair = chairIndex++;
    }
    // check answer
    if (i === targetFriend) return chair;
    // schedule leaving
    heapPush(leaveHeap, [to, chair]);
  }

  return -1;
};