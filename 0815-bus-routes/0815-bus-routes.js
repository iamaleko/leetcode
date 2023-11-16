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
  const val = Symbol();

  for (const joint of graph.get(source)) {
    queue.push(joint);
    joint[val] = 1;
  }

  while (queue.length) {
    const joint = queue.shift();

    for (const stop of joint) {
      if (stop === target) return joint[val];

      for (const _joint of graph.get(stop)) {
        if (_joint[val] === undefined || _joint[val] > joint[val] + 1) {
          queue.push(_joint);
          _joint[val] = joint[val] + 1;
        }
      }
    }
  }  
  
  return -1;
};