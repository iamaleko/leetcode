/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
  if (source === target) return 0;
  
  const graph = new Map();
  const find = (from, to) => {
    const queue = [];
    const checked = new Map();
    
    for (const joint of graph.get(from)) {
      queue.push(joint);
      checked.set(joint, 1);
    }
    
    while (queue.length) {
      const joint = queue.shift();
      const val = checked.get(joint);
      
      for (const stop of joint) {
        if (stop === to) return val;
        
        for (const _joint of graph.get(stop)) {
          const _val = checked.get(_joint);
          if (!_val || _val > val + 1) {
            queue.push(_joint);
            checked.set(_joint, val + 1);
          }
        }
      }
    }
    
    return -1;
  }
  
  // build graph
  for (const route of routes) {
    for (const stop of route) {
      if (!graph.has(stop)) {
        graph.set(stop, new Set());  
      }
      graph.get(stop).add(route);
    }
  }
  
  // console.log(graph)
  
  return find(source, target);
};