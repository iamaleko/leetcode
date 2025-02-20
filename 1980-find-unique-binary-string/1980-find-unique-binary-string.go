func findDifferentBinaryString(nums []string) string {
  bytes := []byte{}
  for i := range(len(nums)) {
    bytes = append(bytes, nums[i][i] ^ 1) // 48 is "0", 49 is "1", also 48 ^ 1 == 49 and 49 ^ 1 == 48
  }
  return string(bytes)
}