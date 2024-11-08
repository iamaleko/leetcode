function kClosest(points: number[][], k: number): number[][] {
  const heap = new MaxPriorityQueue({ priority: (v) => v[2] });
  for (const [x, y] of points) {
    heap.enqueue([x, y, x ** 2 + y ** 2]);
    if (heap.size() > k) heap.dequeue();
  }
  return heap.toArray().map((v) => [v.element[0], v.element[1]]);
};

// function kClosest(points: number[][], k: number): number[][] {
//   return points.map(([x, y]) => [x, y, x ** 2 + y ** 2])
//          .sort(([,,a], [,,b]) => a - b)
//          .slice(0, k)
//          .map(([x, y]) => [x, y]);
// };