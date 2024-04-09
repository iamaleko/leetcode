class Solution:
  def romanToInt(self, s: str) -> int:
    sum = 0
    dict = {
      'CM': 900, 'CD': 400, 'XC': 90, 'XL': 40, 'IX': 9, 'IV': 4,
      'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1
    }
    i = 0
    while i < len(s):
      if s[i:i + 2] in dict:
        sum += dict[s[i:i + 2]]
        i += 2
      else:
        sum += dict[s[i]]
        i += 1
    return sum