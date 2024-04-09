class Solution:
  def romanToInt(self, s: str) -> int:
    sum = 0
    i = 0
    dict = {
      'CM': 900, 'CD': 400, 'XC': 90, 'XL': 40, 'IX': 9, 'IV': 4,
      'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1,
    }
    for i in range(0, len(str), 2):
      if s[i:i + 1] in dict:
        sum += s[i:i + 1]
      else:
        break
    print(sum, i)
    return sum