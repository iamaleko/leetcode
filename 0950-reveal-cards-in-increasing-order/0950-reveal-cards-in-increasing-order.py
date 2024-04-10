class Solution:
  def deckRevealedIncreasing(self, deck: List[int]) -> List[int]:
    # rearrange indexes in right order
    ind = [i for i in range(len(deck))]
    for i in range(len(ind) - 1):
      ind.append(ind.pop(i + 1))
    
    # replace indexes with values from sorted deck
    res = [None for i in range(len(deck))]
    deck.sort()
    for i in range(len(ind)):
      res[ind[i]] = deck[i]

    return res;