import "slices"
func distributeCandies(candyType []int) int {
  slices.Sort(candyType)
  return min(len(candyType) / 2, len(slices.Compact(candyType)))
}