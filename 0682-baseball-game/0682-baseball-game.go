func calPoints(operations []string) int {
  scores := []int{}
  for _, operation := range operations {
    switch operation[0] {
      case '+': scores = append(scores, scores[len(scores)-1] + scores[len(scores)-2])
      case 'D': scores = append(scores, scores[len(scores)-1] * 2)
      case 'C': scores = scores[:len(scores)-1]
      default:
        num, _ := strconv.Atoi(operation)
        scores = append(scores, num)
    }
  }
  ans := 0
  for _, score := range scores {
    ans += score
  }
  return ans
}