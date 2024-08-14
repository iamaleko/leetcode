class Solution(object):
  def smallestDistancePair(self, nums, k):
    nums.sort()
    n = len(nums)

    def pair_count(max_distance):
      count = 0
      r = 1
      for l in range(n - 1):
        while r < n and nums[r] - nums[l] <= max_distance:
          r += 1 # move right bount until value on index r became to big,
                 # than move right left bound and increase count every time
                 # until value on index r will be small enough again:
                 # md = 3
                 # 0lr1  2  3  4  5  6 / d = 0,  
                 # 0l 1r 2  3  4  5  6 / d = 1,  
                 # 0l 1  2r 3  4  5  6 / d = 2,  
                 # 0l 1  2  3r 4  5  6 / d = 3,  
                 # 0l 1  2  3  4r 5  6 / d = 4!, count = 3
                 # 0  1l 2  3  4  5r 6 / d = 4!, count = 3 + 3
                 # 0  1  2l 3  4  5  6r/ d = 4!, count = 3 + 3 + 3
                 # 0  1  2  3l 4  5  6r/ d = 3,  count = 3 + 3 + 3 + 2
                 # 0  1  2  3  4l 5  6r/ d = 3,  count = 3 + 3 + 3 + 2 + 1
                 # 0  1  2  3  4  5l 6r/ d = 3,  count = 3 + 3 + 3 + 2 + 1 + 0
        count += r - l - 1
      return count

    l = 0 # min distance
    r = nums[-1] - nums[0] # max distance
    while l < r:
      c = (l + r) // 2
      if pair_count(c) < k: # we need to find distance with pair count >= k
        l = c + 1
      else:
        r = c

    return l