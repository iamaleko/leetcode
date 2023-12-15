const destCity = (paths) => {
  const map = new Map();
  for (const [from, to] of paths) {
    map.set(from, (map.get(from) || 0) - 1);
    map.set(to, (map.get(to) || 0) + 1);
  }
  for (const [key, val] of map) {
    if (val === 1) return key;
  }
};