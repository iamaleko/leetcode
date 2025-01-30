func myPow(x float64, n int) float64 {
  ans, i := 1.0, n
  if n < 0 { i = -i }
  
  for i > 0 {
    if i % 2 == 0 {
      x *= x
      i /= 2
    } else {
      i--
      ans *= x
    }
  }

  if n > 0 { return ans }
  return 1 / ans
}