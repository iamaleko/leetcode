func mySqrt(n int) int {
  f := float64(n)
  x := f
  if n > 0 {
    for int(f / x) != int(math.Floor(x)) {
      x = (f / x + x) / 2
    }
  }
  return int(math.Floor(x))
}