class Solution:
  def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
    seconds: int = 0
    for i, val in enumerate(tickets):
      if i > k and val >= tickets[k]: seconds -= 1
      seconds += min(val, tickets[k])
    return seconds