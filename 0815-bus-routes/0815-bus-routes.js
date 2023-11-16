/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  
  const graph = new Map();
  
  // build graph
  for (const route of routes) {
    for (const stop of route) {
      if (!graph.has(stop)) {
        graph.set(stop, new Set());  
      }
      graph.get(stop).add(route);
    }
  }
  
  const queue = [];
  const checked = new Set();

  for (const joint of graph.get(source)) {
    queue.push([joint, 1]);
    checked.add(joint);
  }

  while (queue.length) {
    const [joint, val] = queue.shift();

    for (const stop of joint) {
      if (stop === target) return val;

      for (const _joint of graph.get(stop)) {
        if (!checked.has(_joint)) {
          queue.push([_joint, val + 1]);
          checked.add(_joint);
        }
      }
    }
  }  
  
  return -1;
};