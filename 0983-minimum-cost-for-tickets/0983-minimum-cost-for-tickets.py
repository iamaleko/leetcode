class Solution:
  def mincostTickets(self, days: List[int], costs: List[int]) -> int:
    n = len(days)
    costs = list(zip([1,7,30], costs))
    last = days[-1]
    mem = [inf] * (last + 1)
    def dp(day, payed, spent):
      mem[payed] = spent
      if day < n:
        if days[day] <= payed:
          dp(day + 1, payed, spent)
        else:
          payed = days[day] - 1
          for add, cost in costs:
            if mem[min(payed + add, last)] > spent + cost:
              dp(day + 1, min(payed + add, last), spent + cost)
    dp(0, 0, 0)
    return mem[-1]