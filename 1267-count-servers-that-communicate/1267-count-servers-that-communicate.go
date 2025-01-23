func cantorPair(y int, x int) int {
  return (y + x + 1) * (y + x) / 2 + y
}

func countServers(grid [][]int) int {
  h := len(grid)
  w := len(grid[0])
  rows := make([]map[int]bool, h)
  cols := make([]map[int]bool, w)
  for y := range rows {
    rows[y] = map[int]bool{}
  }
  for x := range cols {
    cols[x] = map[int]bool{}
  }
  for y, row := range grid {
    for x, val := range row {
      if val == 1 {
        pair := cantorPair(y, x);
        rows[y][pair] = true
        cols[x][pair] = true
      }
    }
  }
  ans := map[int]bool{}
  for _, row := range rows {
    if len(row) > 1 {
      maps.Insert(ans, maps.All(row))
    }
  }
  for _, col := range cols {
    if len(col) > 1 {
      maps.Insert(ans, maps.All(col))
    }
  }
  return len(ans)
}