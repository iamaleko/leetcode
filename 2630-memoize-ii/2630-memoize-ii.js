/**
 * @param {Function} fn
 * @return {Function}
 */
const memoize = (fn) => {
  const cache = new Map();
  const cached = Symbol();
  
  return (...args) => {
    let map = cache;
    for (const arg of args) {
      if (map.has(arg)) {
        map = map.get(arg); 
      } else {
        map.set(arg, map = new Map());
      }
    }
    
    if (map.has(cached)) {
      return map.get(cached);
    } else {
      map.set(cached, map = fn(...args));
      return map;
    }
  }
}