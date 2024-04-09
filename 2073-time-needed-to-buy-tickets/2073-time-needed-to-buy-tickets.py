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
      if i > k and tickets[i] >= tickets[k]: seconds -= 1
      seconds += min(tickets[i], tickets[k])
    return seconds