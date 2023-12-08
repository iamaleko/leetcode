/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  const cache = new Map();
  const cached = Symbol();
  
  return function(...args) {
    let map = cache;
    for (const arg of args) {
      if (!map.has(arg)) {
        map.set(arg, new Map());
      }
      map = map.get(arg);
    }
    
    if (map.has(cached)) {
      return map.get(cached);
    } else {
      const result = fn(...args);
      map.set(cached, result);
      return result; 
    }
  }
}