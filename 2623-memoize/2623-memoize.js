const memoize = (fn) => {
  const map = new Map();
  const val = Symbol();
  
  return (...args) => {
    node = map
    for (const arg of args) {
      if (!node.has(arg)) node.set(arg, new Map());
      node = node.get(arg)
    }
    if (!node.has(val)) {
      const result = fn(...args);
      node.set(val, result);
    }
    return node.get(val);
  }
}