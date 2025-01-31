func largestIsland(grid [][]int) int {
	islandSizes, islandId := map[int]int{}, 2
	hasWater := false
	ans := 0
	n := len(grid)
  type Offset struct{ Y, X int }
  dir := []*Offset { &Offset{-1, 0}, &Offset{1, 0}, &Offset{0, -1}, &Offset{0, 1} }

	// find islands
  yq, xq, p := []int{}, []int{}, -1
	for y := range n {
		for x := range n {
			if grid[y][x] == 0 {
				hasWater = true
			} else if grid[y][x] == 1 {
				islandSize := 1
				grid[y][x] = islandId
				yq, xq = append(yq, y), append(xq, x)
				p++
				for p >= 0 {
					y, x := yq[p], xq[p]
					yq, xq = yq[:p], xq[:p]
					p--
					for _, offset := range dir {
            yo, xo := y + offset.Y, x + offset.X
						if yo > -1 && yo < n && xo > -1 && xo < n && grid[yo][xo] == 1 {
							islandSize++
							grid[yo][xo] = islandId
							yq, xq = append(yq, yo), append(xq, xo)
							p++
						}
					}
				}
				islandSizes[islandId] = islandSize
        ans = max(ans, islandSize)
				islandId += 1
			}
		}
	}

	// check connections
	if hasWater {
		ans += 1
		for y := range n {
			for x := range n {
				if grid[y][x] == 0 {
					joinedSize, addedIslandIds := 1, map[int]bool{}
					for _, cell := range []struct{ Y, X int }{{y - 1, x}, {y + 1, x}, {y, x - 1}, {y, x + 1}} {
						if cell.Y > -1 && cell.Y < n && cell.X > -1 && cell.X < n && grid[cell.Y][cell.X] > 0 &&
							addedIslandIds[grid[cell.Y][cell.X]] == false {
							joinedSize += islandSizes[grid[cell.Y][cell.X]]
							addedIslandIds[grid[cell.Y][cell.X]] = true
						}
					}
          ans = max(ans, joinedSize)
				}
			}
		}
	}

	return ans
}