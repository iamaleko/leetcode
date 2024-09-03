import (
  "fmt"
  "strconv"
)

func sumDigits(n int) int {
  s := 0
  for n > 0 {
    s += n % 10
    n /= 10
  }
  return s 
}

func getLucky(s string, k int) int {
  str := ""
  for _, r := range s {
    str += strconv.Itoa(int(r) - 96)
  }
  
  n := 0
  for _, r := range str {
    d, _ := strconv.Atoi(string(r))
    n += d
  }

  for ; k > 1; k-- {
    n = sumDigits(n)
  }

  return n;
}