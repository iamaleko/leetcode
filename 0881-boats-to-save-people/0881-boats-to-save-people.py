class Solution:
  def numRescueBoats(self, people: List[int], limit: int) -> int:
    people.sort()
    dq = deque(people)
    boats = 0
    while dq:
      heavy = dq.pop()
      if dq and dq[0] + heavy <= limit:
        dq.popleft()
      boats += 1
    return boats
        