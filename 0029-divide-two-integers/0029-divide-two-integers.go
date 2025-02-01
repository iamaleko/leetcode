import (
  "math"
  "strconv"
  "strings"
)

func divide(dividend int, divisor int) int {
  sign := dividend & math.MinInt32 ^ divisor & math.MinInt32
  if dividend < 0 { dividend = -dividend }
  if divisor < 0 { divisor = -divisor }
  if dividend == 0 || dividend < divisor { return 0 }

  dividendArr := []rune(strconv.Itoa(dividend))
  dividend, dividendArr = int(dividendArr[0] - '0'), dividendArr[1:]
  remainder, zeroes, ansArr := 0, 0, []rune{}

  for {
    if (dividend >= divisor) {
      num := 0
      for dividend >= divisor {
        dividend -= divisor
        num++
      }
      ansArr = append(ansArr, rune(num) + '0')
      remainder = dividend
      zeroes = 0
    } else if len(dividendArr) > 0 {
      if remainder == 0 && dividend > 0 {
        ansArr = append(ansArr, '0')
      }
      dividend, _ = strconv.Atoi(strconv.Itoa(dividend) + string(dividendArr[0]))
      dividendArr = dividendArr[1:]
      zeroes++
    } else {
      ansArr = append(ansArr, []rune(strings.Repeat("0", zeroes))...)
      break
    }
  }

  ans, _ := strconv.Atoi(string(ansArr))
  if sign != 0 { ans = -ans }
  if ans < math.MinInt32 { ans = math.MinInt32 }
  if ans > math.MaxInt32 { ans = math.MaxInt32 }
  return ans
}