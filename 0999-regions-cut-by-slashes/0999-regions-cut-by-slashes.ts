function regionsBySlashes(grid: string[]): number {
  const v: Record<number, number> = {}, w = grid[0].length - 1, h = grid.length - 1;
  const fill = (y, x, s): void => {
    v[(y << 5) + x] |= s = grid[y][x] === ' ' ? 15 : grid[y][x] === '/' ? s & 9 ? 9 : 6 : s & 12 ? 12 : 3;
    if (s & 8 && y > 0 && ~v[(y - 1 << 5) + x] & 2) fill(y - 1, x, 2);
    if (s & 2 && y < h && ~v[(y + 1 << 5) + x] & 8) fill(y + 1, x, 8);
    if (s & 1 && x > 0 && ~v[(y << 5) + x - 1] & 4) fill(y, x - 1, 4);
    if (s & 4 && x < w && ~v[(y << 5) + x + 1] & 1) fill(y, x + 1, 1);
  };
  let ans = 0;
  for (let y = 0, x = 0; y <= h; x++ === w && (x = 0, y++)) {
    if (~v[(y << 5) + x] & 8) { fill(y, x, 8); ans++; }
    if (~v[(y << 5) + x] & 2) { fill(y, x, 2); ans++; }
  }
  return ans;
};

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
//       map[y][x] = 1;
//       while (q.length) {
//         const [y, x] = q.pop();
//         if (y > 0 && !map[y - 1][x]) { map[y - 1][x] = 1; q.push([y - 1, x]); }
//         if (y < h - 1 && !map[y + 1][x]) { map[y + 1][x] = 1; q.push([y + 1, x]); }
//         if (x > 0 && !map[y][x - 1]) { map[y][x - 1] = 1; q.push([y, x - 1]); }
//         if (x < w - 1 && !map[y][x + 1]) { map[y][x + 1] = 1; q.push([y, x + 1]); }
//       }
//     }
//   }
//   return ans;
// };