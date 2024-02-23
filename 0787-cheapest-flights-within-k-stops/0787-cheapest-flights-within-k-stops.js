const findCheapestPrice = (_, links, from, to, stops) => {
  // build graph
  const graph = new Map();
  for (const [from, to, cost] of links) {
    let map;
    if (graph.has(to)) {
      map = graph.get(to);
    } else {
      map = new Map();
      graph.set(to, map);
    }
    map.set(from, cost);
  }

  // bfs
  const mem = new Map(), queue = [[to, 0, 0]];
  let res = -1;
  while (queue.length) {
    const [city, costSum, stopsSum] = queue.pop();
    mem.set(city, costSum);
    if (city === from) {
      if (res > costSum || res === -1) res = costSum;
    } else if (stopsSum <= stops) {
      if (graph.has(city)) {
        const links = graph.get(city);
        for (const [city, cost] of links) {
          if (!mem.has(city) || mem.get(city) > cost + costSum) {
            queue.push([city, cost + costSum, stopsSum + 1]);
          }
        }
      }
    }
  }

  return res;
};