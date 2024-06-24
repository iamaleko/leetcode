class Solution:
  def minKBitFlips(self, nums: List[int], k: int) -> int:
    flips = 0
    flipped = False
    h = deque()

    for i in range(len(nums)):
      if h and h[0] == i:
        flipped = not flipped
        h.popleft()
      can_flip = i <= len(nums) - k
      if nums[i] == 0 and flipped: # update
        # nums[i] = 1 # remove!
        # print(i, 'update', flipped, h) # remove!
        continue
      elif ((nums[i] == 0 and not flipped) or (nums[i] == 1 and flipped)): # need flip
        if can_flip:
          flips += 1
          flipped = not flipped
          if h and h[-1] == i + k:
            h.pop()
          else:
            h.append(i + k)
          # nums[i] = 1 # remove!
          # print(i, 'update and change state', flipped, h) # remove!
        else:
          # print(i, 'failed', flipped, h) # remove!
          return -1
      # print(nums)
    return flips


#  TLE
# class Solution:
#   def minKBitFlips(self, nums: List[int], k: int) -> int:
#     flips = 0
#     def flip(j):
#       for i in range(j, j + k):
#         nums[i] ^= 1
#     for i in range(len(nums)):
#       can_flip = i <= len(nums) - k
#       if nums[i] == 0:
#         if can_flip:
#           flips += 1
#           flip(i)
#         else:
#           return -1
#     return flips