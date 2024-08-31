type HeapItem = [number, ...any[]];
type Graph = Record<number, Record<number, number>>;
type NumberRecord = Record<number, number>;

class MinHeap {
  static append(arr: HeapItem[], item: HeapItem): void {
    arr.push(item);
    if (arr.length > 1) {
      let i = arr.length - 1, t: number;
      while (true) {
        t = i >> 1;
        if (arr[t][0] <= arr[i][0]) break;
        [arr[t], arr[i]] = [arr[i], arr[t]];
        i = t;
      }
    }
  }
  static popleft(arr: HeapItem[]): HeapItem | undefined {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    const item = arr.pop();
    if (arr.length > 1) {
      let i = 0, t: number, l: number, r: number;
      while (true) {
        l = i * 2 + 1;
        r = i * 2 + 2;
        t = i;
        if (l < arr.length && arr[t][0] < arr[l][0]) t = l;
        if (r < arr.length && arr[t][0] < arr[r][0]) t = r;
        if (i === t) break;
        [arr[t], arr[i]] = [arr[i], arr[t]];
        i = t;
      }
    }
    return item;
  }
}

function buildGraph(edges: number[][]): Graph {
  const graph: Graph = {};
  for (const [a, b, cost] of edges) {
    if (!graph.hasOwnProperty(a)) graph[a] = {};
    if (!graph.hasOwnProperty(b)) graph[b] = {};
    if (cost !== -1) {
      graph[a][b] = cost;
      graph[b][a] = cost;
    }
  }
  return graph;
}

function findDistance(graph: Graph, source: number, destination: number): number {
  const visited: NumberRecord = { [source]: 0, [destination]: Infinity },
        heap: HeapItem[] = [[0, source]];
  while (heap.length) {
    const [cost, node] = MinHeap.popleft(heap);
    for (const key in graph[node]) {
      const neighbor = Number(key);
      if (!visited.hasOwnProperty(neighbor) || visited[neighbor] > cost + graph[node][neighbor]) {
        visited[neighbor] = cost + graph[node][neighbor];
        MinHeap.append(heap, [visited[neighbor], neighbor]);
      }
    }
  }
  return visited[destination];
}

function modifiedGraphEdges(n: number, edges: number[][], source: number, destination: number, target: number): number[][] {
  const graph = buildGraph(edges);
  const dist = findDistance(graph, source, destination);

  if (dist < target) return [];
  if (dist === target) {
    for (const edge of edges) {
      if (edge[2] === -1) edge[2] = 2e9;
    }
    return edges;
  }

  for (const edge of edges) {
    if (edge[2] !== -1) continue;
    const [a, b] = edge;
    edge[2] = 1;
    if (!graph.hasOwnProperty(a)) graph[a] = {};
    if (!graph.hasOwnProperty(b)) graph[b] = {};
    graph[a][b] = 1;
    graph[b][a] = 1;

    const dist = findDistance(graph, source, destination)

    if (dist <= target) {
      edge[2] += target - dist;
      for (const edge of edges) {
        if (edge[2] === -1) edge[2] = 2e9;
      }
      return edges;
    }
  }
  return [];
};