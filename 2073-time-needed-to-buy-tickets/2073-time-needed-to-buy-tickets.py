# class Solution:
#   def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
#     seconds: int = 0
#     for i, val in enumerate(tickets):
#       if i > k and val >= tickets[k]: seconds -= 1
#       seconds += min(val, tickets[k])
#     return seconds

class Solution:
  def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
    seconds: int = 0
    for i in range(len(tickets)):
      if tickets[i] >= tickets[k]:
        seconds += tickets[k] - (1 if i > k else 0)
      else:
        seconds += tickets[i]
    return seconds