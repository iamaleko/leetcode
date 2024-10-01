class Solution:
  def canArrange(self, arr, k):
    m = defaultdict(list)
    for i in range(len(arr)):
      key = arr[i] % k
      alt = k - arr[i] % k if key else 0
      if alt in m:
        j = m[alt].pop()
        if not m[alt]:
          del m[alt]
      else:
        m[key].append(i)
    return False if len(m) else True