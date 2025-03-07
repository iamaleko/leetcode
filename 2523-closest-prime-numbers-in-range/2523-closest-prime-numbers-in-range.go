func isPrime(num int) bool {
  delimiter := 2
  for delimiter < num {
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
  samples := 200 // World, forgive me!
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
      samples--
      if samples <= 0 {
        return ans
      }
      prime = left
    }
    left++
  }
  return ans
}