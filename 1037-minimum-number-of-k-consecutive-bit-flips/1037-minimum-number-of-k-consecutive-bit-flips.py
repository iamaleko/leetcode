# class Solution:
#   def minKBitFlips(self, nums: List[int], k: int) -> int:
#     flips = 0
#     flipped = False
#     h = deque()

#     for i in range(len(nums)):
#       if h and h[0] == i:
#         flipped = not flipped
#         h.popleft()
#       if bool(nums[i]) == flipped: # need flip
#       # if ((nums[i] == 0 and not flipped) or (nums[i] == 1 and flipped)): # need flip
#         if i <= len(nums) - k: # can flip
#           flips += 1
#           flipped = not flipped
#           if h and h[-1] == i + k:
#             h.pop()
#           else:
#             h.append(i + k)
#         else:
#           return -1
#     return flips

# class Solution:
#   def minKBitFlips(self, nums: List[int], k: int) -> int:
#     flips = 0
#     flipped = False
#     states = [0] * (len(nums) + 1)
#     j = len(nums) - k

#     for i in range(len(nums)):
#       if states[i]:
#         flipped = not flipped
#       if bool(nums[i]) == flipped:
#         if i <= j:
#           flips += 1
#           flipped = not flipped
#           states[i + k] ^= 1
#         else:
#           return -1
#     return flips

class Solution:
  def minKBitFlips(self, nums: List[int], k: int) -> int:
    flips = 0
    flipped = False
    states = defaultdict(int)
    j = len(nums) - k

    for i in range(len(nums)):
      if i in states and states[i]:
        flipped = not flipped
      if bool(nums[i]) == flipped:
        if i <= j:
          flips += 1
          flipped = not flipped
          states[i + k] ^= 1
        else:
          return -1
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