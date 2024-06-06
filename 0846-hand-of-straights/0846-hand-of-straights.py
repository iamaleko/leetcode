class Solution:
  def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
    sets = {}
    hand.sort()

    for card in hand:
      waited = card in sets
      size = sets[card].pop() + 1 if waited else 1
      if size < groupSize:
        if card + 1 not in sets:
          sets[card + 1] = []
        sets[card + 1].append(size)
      if waited and len(sets[card]) == 0:
        del sets[card]

    return len(sets) == 0
      
