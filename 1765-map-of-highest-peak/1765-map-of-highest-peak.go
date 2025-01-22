type Coord struct {
	y int
	x int
}

func highestPeak(m [][]int) [][]int {
  my, mx := len(m) - 1, len(m[0]) - 1
  neighbors := func(y int, x int, f func(int, int) int) []int {
    ans := []int{}
    coords := []Coord{ {y - 1, x}, {y + 1, x}, {y, x - 1}, {y, x + 1} }
    for _, coord := range coords {
      if mx >= coord.x && coord.x >= 0 && my >= coord.y && coord.y >= 0 {
        ans = append(ans, f(coord.y, coord.x))
      }
    }
    return ans
  }

  for y := range my + 1 {
    for x := range mx + 1 {
      if m[y][x] == 1 {
        m[y][x] = 0
      } else {
        m[y][x] = -1
      }
    }
  }

  s := map[Coord]bool{}
  for y := range my + 1 {
    for x := range mx + 1 {
      if m[y][x] == -1 && slices.Contains(neighbors(y, x, func(y int, x int) int {
        if m[y][x] == -1 {
          return 0
        }
        return 1
      }), 1) {
        s[Coord{ y, x }] = true
      }
    }
  }

  for len(s) > 0 {
    ns := map[Coord]bool{}
    for coord := range s {
      m[coord.y][coord.x] = slices.Min(neighbors(coord.y, coord.x, func(y int, x int) int {
        if m[y][x] == -1 {
          ns[Coord{ y, x }] = true
          return math.MaxInt
        } else {
          return m[y][x]
        }
      })) + 1
    }
    s = ns
  }

  return m
}
