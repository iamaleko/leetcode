class Solution:
  def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
    sets = {}
    heapify(hand)

    while hand:
      card = heappop(hand)
      size = sets[card].pop() + 1 if card in sets else 1
      if size < groupSize:
        if card + 1 not in sets:
          sets[card + 1] = []
        sets[card + 1].append(size)
      if card in sets and len(sets[card]) == 0:
        del sets[card]

    return len(sets) == 0
      
