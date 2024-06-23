# class Solution:
#   def longestSubarray(self, nums: List[int], limit: int) -> int:
#     maxh = []
#     minh = []
#     ans = 0
#     l = 0
    
#     def updateHeaps(l):
#       while maxh and maxh[0][1] < l:
#         heappop(maxh)
#       while minh and minh[0][1] < l:
#         heappop(minh)

#     for r in range(len(nums)):
#       heappush(maxh, (-nums[r], r))
#       heappush(minh, (nums[r], r))
#       updateHeaps(l)
#       while maxh and minh and -maxh[0][0] - minh[0][0] > limit:
#         l += 1
#         updateHeaps(l)
#       if r - l + 1 > ans:
#         ans = r - l + 1
    
#     return ans

class Solution:
  def longestSubarray(self, nums: List[int], limit: int) -> int:
    # возрастающий и убывающий монотонные стеки
    max_st = deque()
    min_st = deque()
    l = 0
    for num in nums:
      # добавляем текущий элемент в оба стека
      while max_st and max_st[-1] < num:
        max_st.pop()
      while min_st and min_st[-1] > num:
        min_st.pop()
      max_st.append(num)
      min_st.append(num)
      # если разница между текущим минимальным и максимальным значениями не укалыдвается в лимит
      # то сдвигаем левую границу на 1, далее у нас два варианта:
      # 1) если элемент по левому указателю и есть причина такой большой разницы,
      # то мы уберем его из монотонных стеков и дальше разница между l и r продолжит увеличиваться,
      # а значит и ответ продолжит расти
      # 2) если причина большой разницы НЕ левый элемент, то с каждой итерацией мы будем сдвигать левый указатель,
      # таким образом разница между l и r останется прежней
      if max_st and min_st and max_st[0] - min_st[0] > limit:
        if max_st[0] == nums[l]:
          max_st.popleft()
        if min_st[0] == nums[l]:
          min_st.popleft()
        l += 1
    # Так как в итоге r будет равен полной длинне массива, то ответом будет разница длинны
    # массива (ака. позиция указателя r после полного прохождения массива) и указателя l
    return len(nums) - l