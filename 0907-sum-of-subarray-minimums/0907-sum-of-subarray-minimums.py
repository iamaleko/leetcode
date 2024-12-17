class Solution:
  def sumSubarrayMins(self, arr: List[int]) -> int:
    ans, mod, rst = 0, 1e9 + 7, [(0,-1,0)]
    for r, num in enumerate(arr):
      while rst[-1][0] >= num: rst.pop()
      rst.append((num, r, rst[-1][2] + num * (r - rst[-1][1])))
      ans += rst[-1][2]
    return int(ans % mod)

# 3124
# ---- 
#      (0,-1,0)
# 3    (0,-1,0)(3,0,3)                    += 0 + 3 * (0 - -1) = 3 (3)
# 31   (0,-1,0)(del)(1,1,2)               += 0 + 1 * (1 - -1) = 2 (5)
# 312  (0,-1,0)(del)(1,1,2)(2,2,4)        += 2 + 2 * (2 - 1)  = 4 (9)
# 3124 (0,-1,0)(del)(1,1,2)(2,2,4)(4,3,4) += 4 + 4 * (3 - 2)  = 4 (17)