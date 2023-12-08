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
      if (!map.has(arg)) {
        map.set(arg, new Map());
      }
      map = map.get(arg);
    }
    
    if (!map.has(cached)) {
      map.set(cached, fn(...args));
    }
    
    return map.get(cached);
  }
}