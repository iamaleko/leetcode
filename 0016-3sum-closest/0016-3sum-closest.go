import (
  "slices"
  "math"
)

func threeSumClosest(nums []int, target int) int {
  slices.Sort(nums)
  minDiff := math.MaxInt
  closestSum := 0
  for a, n := 0, len(nums); a < n - 2; a++ {
    b, c := a + 1, n - 1
    for b < c {
      sum := nums[a] + nums[b] + nums[c]
      if sum == target {
        return sum
      }
      diff := int(math.Abs(float64(target - sum)))
      if sum < target {
        b++
      } else {
        c--
      }
      if minDiff > diff {
        minDiff = diff
        closestSum = sum
      }
    }
  }
  return closestSum
}