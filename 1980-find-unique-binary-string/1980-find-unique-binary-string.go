func findDifferentBinaryString(nums []string) string {
  bytes := []byte{}
  for i := range(len(nums)) {
    if nums[i][i] == 49 {
      bytes = append(bytes, 48)
    } else {
      bytes = append(bytes, 49)
    }
  }
  return string(bytes)
}