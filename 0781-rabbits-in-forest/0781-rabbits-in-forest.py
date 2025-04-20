class Solution:
  def numRabbits(self, answers: List[int]) -> int:
    count = {}
    ans = 0
    for answer in answers:
      if answer + 1 not in count:
        if answer + 1 == 1:
          ans += 1
        else:
          count[answer + 1] = 1
      elif answer + 1 in count:
        count[answer + 1] += 1
        if count[answer + 1] == answer + 1:
          ans += answer + 1
          del count[answer + 1]
    ans += sum(count.keys())
    return ans

        