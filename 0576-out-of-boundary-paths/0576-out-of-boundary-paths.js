const findPaths = (y, x, max, sy, sx) => {
  const cache = [];
  const dp = (cy,cx,rm) => {
    if (cy < 0 || cx < 0 || cx === x || cy === y) return 1;
    if (!rm) return 0;
    if (cache[cy]?.[cx]?.[rm] !== undefined) return cache[cy][cx][rm];
    if (!cache[cy]) cache[cy] = [];
    if (!cache[cy][cx]) cache[cy][cx] = {};
    return cache[cy][cx][rm] = (dp(cy-1,cx,rm-1) + dp(cy+1,cx,rm-1) + dp(cy,cx-1,rm-1) + dp(cy,cx+1,rm-1)) % (1e9+7);
  }
  return dp(sy,sx,max);
};