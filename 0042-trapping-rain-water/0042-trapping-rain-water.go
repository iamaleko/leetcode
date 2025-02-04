func trap(arr []int) int {
  n, sum := len(arr), 0
  if n < 2 {
    return 0
  }
  for i := 1; i < n; i++ {
    if arr[i] < arr[i - 1] {
      j, mi := i, i
      for ; j < n; j++ {
        if arr[j] >= arr[i - 1] {
          mi = j
          break
        } else if arr[j] >= arr[mi] {
          mi = j
        }
      }
      if mi - i > 0 {
        min := min(arr[i - 1], arr[mi])
        for k := i; k < mi; k++ {
          if arr[k] < min {
            sum += min - arr[k]
          }
        }
        i = mi - 1  
      }
    }
  }
  return sum
}