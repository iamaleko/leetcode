class Solution:
  def minDominoRotations(self, t: List[int], b: List[int]) -> int:
    cnt = defaultdict(int)
    for num in t:
      cnt[num] += 1
    for num in b:
      cnt[num] += 1
    num = -1
    for k in cnt:
      if cnt[k] >= len(t):
        num = k
        break
    a, k = 0, 0
    for i in range(len(t)):
      if t[i] != num and b[i] != num:
        return -1
      if t[i] != num:
        a += 1
      if b[i] != num:
        k += 1
    return min(a, k)
        