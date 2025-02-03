import (
  "strconv"
)

func countAndSay(n int) string {
  ans := []rune{'1', 0}
  for range n-1 {
    arr := []rune{}
    cnt := 0
    for i, rn := range ans {
      if cnt > 0 && rn != ans[i-1] {
        arr = append(arr, append([]rune(strconv.Itoa(cnt)), ans[i-1])...)
        cnt = 0
      }
      cnt++
    }
    ans = append(arr, 0)
  }
  return string(ans[:len(ans)-1])
}