const numSpecial = (mat) => {
  const mx = new Map();
  const my = new Map();
  
  for (const y in mat) {
    for (const x in mat[y]) {
      if(mat[y][x]) {
        mx.has(x) ? mx.set(x, mx.get(x) + 1) : mx.set(x, 1);
        my.has(y) ? my.set(y, my.get(y) + 1) : my.set(y, 1);
      }
    }
  }
  
  let res = 0;
  
  for (const y in mat) {
    for (const x in mat[y]) {
      if(mat[y][x] && (mx.get(x) || 0) <= 1 && (my.get(y) || 0) <= 1) {
        ++res;
      }
    }
  }
  
  
  return res;
};