func isPrime(num int) bool {
  delimiter := 2
  max := int(math.Sqrt(float64(num)))
  for delimiter <= max {
    if num % delimiter == 0 {
      return false
    }
    delimiter++
  }
  return true
}

func closestPrimes(left int, right int) []int {
  prime := 0
  ans := []int{-1, -1}
  best := right
  if left == 1 {
    left++
  }
  for left <= right {
    if isPrime(left) {
      if prime > 0 && left - prime < best {
        best = left - prime
        ans[0] = prime
        ans[1] = left
        if best == 1 {
          return ans
        }
      }
      prime = left
    }
    left++
  }
  return ans
}