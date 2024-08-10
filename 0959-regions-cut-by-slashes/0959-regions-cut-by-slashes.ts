// function regionsBySlashes(grid: string[]): number {
//   //  rebuild map
//   const map: number[][] = [];
//   for (let i = 0; i < grid.length; i++) {
//     const a = [], b = [], c = [];
//     map.push(a, b, c);
//     for (const ch of grid[i]) {
//       if (ch === ' ') {
//         a.push(0, 0, 0);
//         b.push(0, 0, 0);
//         c.push(0, 0, 0);
//       } else if (ch === '/') {
//         a.push(0, 0, 1);
//         b.push(0, 1, 0);
//         c.push(1, 0, 0);
//       } else if (ch === '\\') {
//         a.push(1, 0, 0);
//         b.push(0, 1, 0);
//         c.push(0, 0, 1);
//       }
//     }
//   }
//   // find regions
//   let ans = 0;
//   for (let w = map[0].length, h = map.length, x = 0, y = 0; y < h; ++x === w && (x = 0, y++)) {
//     if (map[y][x] === 0) {
//       ans++;
//       const q = [[y, x]];
//       while (q.length) {
//         const [y, x] = q.pop();
//         map[y][x] = 1;
//         if (y > 0 && !map[y - 1][x]) q.push([y - 1, x]);
//         if (y < h - 1 && !map[y + 1][x]) q.push([y + 1, x]);
//         if (x > 0 && !map[y][x - 1]) q.push([y, x - 1]);
//         if (x < w - 1 && !map[y][x + 1]) q.push([y, x + 1]);
//       }
//     }
//   }
//   return ans;
// };

function regionsBySlashes(grid: string[]): number {
  const v: Record<number, number> = {}, w = grid[0].length, h = grid.length, t = 1 << 3, r = 1 << 2, b = 1 << 1, l = 1;
  const fill = (y, x, s) => {
    s = grid[y][x] === ' ' ? t + r + b + l : grid[y][x] === '/' ? (s & t + l ? t + l : b + r) : (s & t + r ? t + r : b + l);
    v[(y << 5) + x] |= s;
    if (s & t && y > 0 && ~v[(y - 1 << 5) + x] & b) fill(y - 1, x, b);
    if (s & b && y < h - 1 && ~v[(y + 1 << 5) + x] & t) fill(y + 1, x, t);
    if (s & l && x > 0 && ~v[(y << 5) + x - 1] & r) fill(y, x - 1, r);
    if (s & r && x < w - 1 && ~v[(y << 5) + x + 1] & l) fill(y, x + 1, l);
  };
  let ans = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (~v[(y << 5) + x] & t) { fill(y, x, t); ans++; }
      if (~v[(y << 5) + x] & b) { fill(y, x, b); ans++; }
    }
  }
  return ans;
};