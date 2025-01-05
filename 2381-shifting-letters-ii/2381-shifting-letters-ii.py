class Solution:
  def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
    s = list(s)
    shifts = deque(sorted(shifts))
    heap = []
    shift = 0
    for i in range(len(s)):
      while heap and heap[0][0] < i:
        shift += -1 if heap[0][1] else 1
        heappop(heap)
      while shifts and shifts[0][0] == i:
        shift += 1 if shifts[0][2] else -1
        heappush(heap, (shifts[0][1], shifts[0][2]))
        shifts.popleft()
      s[i] = chr(97 + (26 + (ord(s[i]) - 97) + shift) % 26)
    return ''.join(s)

        