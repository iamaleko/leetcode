class Solution:
  def checkValidCuts(self, n: int, rectangles: List[List[int]]) -> bool:
    for l, r in [(0, 2), (1, 3)]:
      rectangles.sort(key=lambda x: (x[l], x[r]))
      cuts, cut = 0, 0
      for rectangle in rectangles:
        if cut <= rectangle[l]:
          cuts += 1
          if cuts == 3:
            return True
        if rectangle[r] > cut:
          cut = rectangle[r]
    return False
        