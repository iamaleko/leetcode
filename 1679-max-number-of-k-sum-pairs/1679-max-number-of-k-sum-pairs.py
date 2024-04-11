class Solution:
  def maxOperations(self, nums: List[int], k: int) -> int:
    map = {}
    for i, num in enumerate(nums):
      if num not in map:
        map[num] = set()
      map[num].add(i)

    cnt = 0
    for i, num in enumerate(nums):
      key = k - num
      if key in map and i in map[num]:
        for j in map[key]:
          if j != i:
            cnt += 1
            map[key].remove(j)
            if i in map[num]:
              map[num].remove(i)
            break
    return cnt
        