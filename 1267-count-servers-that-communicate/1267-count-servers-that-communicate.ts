function cantorPair(y: number, x: number): number {
  return (y + x + 1) * (y + x) / 2 + y;
}

function countServers(grid: number[][]): number {
  const rows: Set<number>[] = new Array(grid.length).fill(null).map(() => new Set()),
        cols: Set<number>[] = new Array(grid[0].length).fill(null).map(() => new Set());
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
      if (grid[y][x] == 1) {
        const pair = cantorPair(y, x);
        rows[y].add(pair)
        cols[x].add(pair)
      }
    } 
  }
  const ans = new Set<number>();
  for (const row of rows) {
    if (row.size > 1) {
      row.forEach(ans.add, ans)
    }
  }
  for (const col of cols) {
    if (col.size > 1) {
      col.forEach(ans.add, ans)
    }
  }
  return ans.size
};