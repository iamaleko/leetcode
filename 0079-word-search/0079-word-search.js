const exist = (m, str) => {
  let mx = m[0].length - 1, my = m.length - 1;

  const dfs = (y, x, i) => {
    if (m[y][x] !== str[i]) return false;
    if (++i === str.length) return true;
    
    const chr = m[y][x];
    m[y][x] = '';
    const res = y && dfs(y - 1, x, i) ||
                y < my && dfs(y + 1, x, i) ||
                x && dfs(y, x - 1, i) ||
                x < mx && dfs(y, x + 1, i);
    m[y][x] = chr;

    return res;
  }

  for (let y = 0; y <= my; ++y)
    for (let x = 0; x <= mx; ++x)
      if (dfs(y, x, 0)) return true;

  return false;
};