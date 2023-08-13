const countNegatives = (grid) => {
  if (!grid.length || !grid[0].length) return 0;

  let pos,
      c,
      sum = 0,
      l = 0,
      r = grid[0].length - 1,
      z = grid.length,
      rr,
      ll;

  for (let row of grid) {
    if (row[r] < 0) {
      rr = r;
      ll = l;
      while (ll <= rr) {
        c = (rr + ll) / 2 | 0;
        if (row[c] < 0) {
          rr = c - 1;
          pos = c;
        } else {
          ll = c + 1;
        }
      }
    } else {
      pos = -1;
    }

    if (pos > -1) {
      sum += z * (r - pos + 1);
      r = pos - 1;
      if (r < 0) break;
    }
    z--;
  }

  return sum;
};