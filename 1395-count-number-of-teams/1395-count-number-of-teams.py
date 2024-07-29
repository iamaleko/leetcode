# class Solution:
#   def numTeams(self, rating: List[int]) -> int:
#     ans = 0

#     left = [0] + [0] * max(rating)
#     left[rating[0]] = 1
#     right = [0] + [0] * max(rating)
#     for i in range(1, len(rating)):
#       right[rating[i]] = 1

#     for i in range(1, len(rating) - 1):
#       # remove from right
#       right[rating[i]] = 0
#       # correct left and right size
#       left_lower = sum(left[0:rating[i]])
#       left_greater = sum(left[rating[i] + 1:])
#       right_lower = sum(right[0:rating[i]])
#       right_greater = sum(right[rating[i] + 1:])
#       # count triplets
#       if left_lower and right_greater:
#         ans += left_lower * right_greater
#       if left_greater and right_lower:
#         ans += left_greater * right_lower
#       # add to left
#       left[rating[i]] = 1

#     return ans

class Solution:
  def search(self, num, arr):
      l = 0
      r = len(arr) - 1
      while l <= r:
        c = (l + r) // 2
        if arr[c] < num:
          l = c + 1
        else:
          r = c - 1
      return l

  def numTeams(self, rating: List[int]) -> int:
    ans = 0
    left = [rating[0]]
    right = sorted(rating[1:])

    for i in range(1, len(rating) - 1):
      # print(left, right)
      left_i = self.search(rating[i], left)
      right_i = self.search(rating[i], right)
      # count triplets
      left_lower = left_i
      left_greater = len(left) - left_i
      right_lower = right_i
      right_greater = len(right) - right_i - 1
      # print(rating[i], left_lower, left_greater, right_lower, right_greater)
      if left_lower and right_greater:
        ans += left_lower * right_greater
      if left_greater and right_lower:
        ans += left_greater * right_lower
      # remove from right
      right.pop(right_i)
      # add to left
      left.insert(left_i, rating[i])

    return ans