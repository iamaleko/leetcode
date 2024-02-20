const exist = (m, str) => {
  let mx = m[0].length - 1, my = m.length - 1;

  const dfs = (y, x, i, s) => {
    const pair = (y << 5) + x;

    if (s.has(pair) || m[y][x] !== str[i]) return false;
    if (++i === str.length) return true;
    
    s.add(pair);
    const res = y && dfs(y - 1, x, i, s) ||
                y < my && dfs(y + 1, x, i, s) ||
                x && dfs(y, x - 1, i, s) ||
                x < mx && dfs(y, x + 1, i, s);
    s.delete(pair);

    return res;
  }

  // search
  for (let y = 0; y <= my; ++y)
    for (let x = 0; x <= mx; ++x)
      if (dfs(y, x, 0, new Set())) return true;

  return false;
};