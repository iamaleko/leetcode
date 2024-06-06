# class Solution:
#   def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
#     if groupSize == 1:
#       return True

#     sets = defaultdict(list)
#     hand.sort()

#     for card in hand:
#       size = sets[card].pop() + 1 if len(sets[card]) else 1
#       if size < groupSize:
#         sets[card + 1].append(size)

#     for waited in sets:
#       if len(sets[waited]):
#         return False

#     return True
      
class Solution:
  def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
    sets = {}
    hand.sort()

    for card in hand:
      if card in sets:
        size = sets[card].pop() + 1
        if not sets[card]:
          del sets[card]
      else:
        size = 1
      if size < groupSize:
        if card + 1 in sets:
          sets[card + 1].append(size)
        else:
          sets[card + 1] = [size]

    return not sets