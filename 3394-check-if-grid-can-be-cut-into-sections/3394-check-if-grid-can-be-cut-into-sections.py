class Solution:
  def checkValidCuts(self, n: int, rectangles: List[List[int]]) -> bool:
    # hor
    rectangles.sort(key=lambda x: (x[0],x[2]))
    cuts, cut = 0, 0
    for l,_,r,_ in rectangles:
      if cut and cut <= l:
        cuts += 1
        if cuts == 2:
          return True
      if r > cut:
        cut = r
    # ver
    rectangles.sort(key=lambda x: (x[1],x[3]))
    cuts, cut = 0, 0
    for _,l,_,r in rectangles:
      if cut and cut <= l:
        cuts += 1
        if cuts == 2:
          return True
      if r > cut:
        cut = r
    return False
        