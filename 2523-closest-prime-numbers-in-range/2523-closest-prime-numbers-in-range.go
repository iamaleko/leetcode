import (
  "math"
)

func isPrime(num int) bool {
  fl := float64(num)
  max := math.Sqrt(float64(num))
  delimiter := 2.0
  for delimiter <= max {
    if (fl / delimiter) == math.Trunc(fl / delimiter) {
      return false
    }
    delimiter++
  }
  return true
}

// func isPrime(num int) bool {
//   delimiter := 2
//   max := int(math.Sqrt(float64(num)))
//   for delimiter <= max {
//     if num % delimiter == 0 {
//       return false
//     }
//     delimiter++
//   }
//   return true
// }

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