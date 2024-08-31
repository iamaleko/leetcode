function maxProbability(n: number, edges: number[][], succProb: number[], start_node: number, end_node: number): number {
  // build graph
  const graph: Record<number, Record<number, number>> = {};
  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];
    if (!graph.hasOwnProperty(a)) graph[a] = {};
    if (!graph.hasOwnProperty(b)) graph[b] = {};
    graph[a][b] = succProb[i];
    graph[b][a] = succProb[i];
  }
  // BFS (full scan, could be optimized with priority queue but i am lazy today)
  const reached: Record<string, number> = { [start_node]: 1 };
  const queue: string[] = [String(start_node)];
  while (queue.length) {
    const node = queue.shift();
    for (const _node in graph[node]) {
      if (!reached.hasOwnProperty(_node) || reached[_node] < reached[node] * graph[node][_node]) {
        reached[_node] = reached[node] * graph[node][_node];
        queue.push(_node);
      }
    }
  }
  return reached.hasOwnProperty(end_node) ? reached[end_node] : 0;
};