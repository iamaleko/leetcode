const customSortString = (order, s) => {
  let map = new Map(), def = 0;
  for (const key in order) map.set(order[key], key);
  return s.split``.sort((a, b) => (map.get(a) || def) - (map.get(b) || def)).join``;
};