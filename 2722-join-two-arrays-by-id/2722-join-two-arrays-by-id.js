const join = (a, b) => {
  const map = new Map();
  for (let i = 0; i < a.length; i++) {
    map.set(a[i].id, a[i]);
  }
  for (let i = 0; i < b.length; i++) {
    if (map.has(b[i].id)) {
      const obj = map.get(b[i].id);
      for (const key in b[i]) if (b[i].hasOwnProperty(key)) {
        obj[key] = b[i][key];
      }
    } else {
      map.set(b[i].id, b[i]);
    }
  }
  const res = Array.from(map.values());
  res.sort((a, b) => a.id - b.id);
  return res;
};