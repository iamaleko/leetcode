class Solution:
  def subarraysDivByK(self, nums: List[int], k: int) -> int:
    # running sum
    nums = [0] + nums
    for i in range(1, len(nums)):
      nums[i] += nums[i - 1]

    # divisible subarrays
    ans = 0
    m = defaultdict(int)
    for i in range(1, len(nums)):
      m[nums[i - 1] % k] += 1
      ans += m[nums[i] % k]
    
    return ans