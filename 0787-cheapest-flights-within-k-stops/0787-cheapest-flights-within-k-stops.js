const findCheapestPrice = (cities, links, from, to, stops) => {
  // build graph
  const graph = new Map();
  for (const [to, from, cost] of links) {
    let map;
    if (graph.has(from)) {
      map = graph.get(from);
    } else {
      map = new Map();
      graph.set(from, map);
    }
    map.set(to, cost);
  }
  // console.log(graph);

  // bfs
  const mem = new Map(), queue = [[to, 0, 0]];
  let res = -1;
  while (queue.length) {
    const [city, costSum, stopsSum] = queue.pop();
    // console.log(city, costSum, stopsSum);
    mem.set(city, costSum);
    if (city === from) {
      if (res > costSum || res === -1) res = costSum;
    } else if (stopsSum <= stops) {
      const links = graph.get(city);
      if (links) for (const [city, cost] of links) {
        let key = city;
        if (!mem.has(key) || mem.get(key) > cost + costSum) {
          queue.push([city, cost + costSum, stopsSum + 1]);
        }
      }
    }
  }

  return res;
};