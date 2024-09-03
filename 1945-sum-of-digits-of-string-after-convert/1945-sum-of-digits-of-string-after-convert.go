func sumDigits(n int) int {
  s := 0
  for n > 0 {
    s += n % 10
    n /= 10
  }
  return s 
}

func getLucky(s string, k int) int {
  n := 0
  for _, r := range s {
    n += sumDigits(int(r) - 96)
  }
  for ; k > 1; k-- {
    n = sumDigits(n)
  }
  return n;
}