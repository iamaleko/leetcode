class Solution:
  def countDays(self, days: int, meetings: List[List[int]]) -> int:
    if not meetings:
      return days
    meetings.sort(key=lambda x: (x[0],x[1]))
    ans = 0
    day = 1
    for start, end in meetings:
      if day < start:
        ans += start - day
      if day < end + 1:
        day = end + 1
    if day <= days:
        ans += days + 1 - day
    return ans
        