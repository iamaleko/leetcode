const transpose = (m) => {
  const res = [];
  if (!m.length) return res;
  
  let sx = 0, ms = Math.max(m.length, m[0].length);
  for (let y = 0; y < ms; ++y) {
    for (let x = sx; x < ms; ++x) {
      
      if (m[y] && m[y][x] !== undefined) {
        if (!res[x]) res[x] = [];
        res[x][y] = m[y][x];
      }
      
      if (m[x] && m[x][y] !== undefined) {
        if (!res[y]) res[y] = [];
        res[y][x] = m[x][y];
      }
      
    }
    
    ++sx;
  }
  
  return res;
};