class Solution:
  def countDays(self, days: int, meetings: List[List[int]]) -> int:
    if not meetings:
      return days
    meetings.sort()
    ans, day = 0, 0
    for start, end in meetings:
      if day < start - 1:
        ans += start - day - 1
      if day < end:
        day = end
    if day < days:
        ans += days - day
    return ans
        