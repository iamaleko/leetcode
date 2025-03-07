import (
  "math"
)

func isPrime(num int) bool {
  flt := float64(num)
  limit := math.Sqrt(flt)
  delimiter := 2.0
  for delimiter <= limit {
    if (flt / delimiter) == math.Trunc(flt / delimiter) {
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