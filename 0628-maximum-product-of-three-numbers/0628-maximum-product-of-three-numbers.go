func maximumProduct(nums []int) int {
  maxTop := []int{math.MinInt,math.MinInt,math.MinInt}
  minTop := []int{math.MaxInt,math.MaxInt}
  for _, maxNum := range nums {
    minNum := maxNum
    for i := range 3 {
      if (maxNum > maxTop[i]) {
        maxNum, maxTop[i] = maxTop[i], maxNum
      }
    }
    for i := range 2 {
      if (minNum < minTop[i]) {
        minNum, minTop[i] = minTop[i], minNum
      }
    }  
  }
  return max(minTop[0] * minTop[1] * maxTop[0], maxTop[0] * maxTop[1] * maxTop[2])
}