func convert(s string, n int) string {
  if n == 1 || len([]rune(s)) < n {
    return s
  }
  rows := make([]string, n)
  row, step := 0, 1
  n--
  for _, rn := range s {
    rows[row] += string(rn)
    row += step
    if row == n || row == 0 {
      step = -step;
    }
  }
  return strings.Join(rows, "")
}