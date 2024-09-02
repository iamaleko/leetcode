func chalkReplacer(chalk []int, k int) int {
  chalkSum := 0;
  for _, val := range chalk {
    chalkSum += val;
  }
  lastIterationChalkSum := k % chalkSum;
  for i, val := range chalk {
    lastIterationChalkSum -= val;
    if lastIterationChalkSum < 0 {
      return i;
    }
  }
  return 0;
}