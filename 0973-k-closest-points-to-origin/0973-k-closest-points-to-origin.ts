function kClosest(points: number[][], k: number): number[][] {
  const heap = MinPriorityQueue.from(points.map(([x, y]) => [[x, y], x ** 2 + y ** 2]));
  const ans: number[][] = [];
  k = Math.min(points.length, k);
  while (ans.length < k) ans.push(heap.dequeue().element)
  return ans;
};

// function kClosest(points: number[][], k: number): number[][] {
//   return points.map(([x, y]) => [x, y, x ** 2 + y ** 2])
//          .sort(([,,a], [,,b]) => a - b)
//          .slice(0, k)
//          .map(([x, y]) => [x, y]);
// };