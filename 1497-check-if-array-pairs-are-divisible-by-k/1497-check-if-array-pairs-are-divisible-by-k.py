class Solution:
  def canArrange(self, arr, k):
    m = defaultdict(list)
    n = 0
    for i in range(len(arr)):
      key = arr[i] % k
      alt = k - key if key else 0
      if alt in m:
        j = m[alt].pop()
        n -= 1
        if not m[alt]:
          del m[alt]
      else:
        m[key].append(i)
        n += 1
    return n == 0