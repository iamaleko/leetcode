function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) return [];
  const grid: number[][] = [];
  for (let y = 0; y < m; y++) grid.push(original.slice(y * n, y * n + n));
  return grid;
};

// function construct2DArray(original: number[], m: number, n: number): number[][] {
//   if (original.length !== m * n) return [];
//   const grid: number[][] = new Array(m).fill(0).map(() => new Array(n));
//   for (let i = 0, y = 0; y < m; y++) {
//     for (let x = 0; x < n; x++) {
//       grid[y][x] = original[i++];
//     }  
//   }
//   return grid;
// };