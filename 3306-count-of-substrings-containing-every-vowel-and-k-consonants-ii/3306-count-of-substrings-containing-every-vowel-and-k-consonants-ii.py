class Solution:
  def countOfSubstrings(self, w: str, k: int) -> int:
    ans, n, d = 0, len(w), {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
    cIndex, vIndex = [], [-1] * 5
    cLeft, cRight, wLeft = 0, 0, 0
    for wRight in range(n):
      if w[wRight] in d:
        vIndex[d[w[wRight]]] = wRight
      else:
        cIndex.append(wRight)
        cRight += 1
      while cRight - cLeft > k:
        if w[wLeft] in d:
          if wLeft == vIndex[d[w[wLeft]]]:
            vIndex[d[w[wLeft]]] = -1
        else:
          cLeft += 1
        wLeft += 1
      if cRight - cLeft == k and min(vIndex) > -1:
        ans += 1 + min(cIndex[cLeft] if cLeft < cRight else n, min(vIndex)) - wLeft 
    return ans