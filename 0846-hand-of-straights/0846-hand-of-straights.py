class Solution:
  def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
    if groupSize == 1:
      return True

    sets = {}
    heapify(hand)

    while hand:
      card = heappop(hand)
      if card in sets:
        size = sets[card].pop() + 1
        if size < groupSize:
          if card + 1 not in sets:
            sets[card + 1] = [size]
          else:
            sets[card + 1].append(size)
        if len(sets[card]) == 0:
          del sets[card]
      else:
        if card + 1 not in sets:
          sets[card + 1] = [1]
        else:
          sets[card + 1].append(1)

    return len(sets) == 0
      
