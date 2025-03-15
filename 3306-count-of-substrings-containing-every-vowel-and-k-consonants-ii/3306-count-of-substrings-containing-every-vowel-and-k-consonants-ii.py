class Solution:
  def countOfSubstrings(self, w: str, k: int) -> int:
    n = len(w)
    d = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
    consonants, vovels = [], [-1,-1,-1,-1,-1]
    consonantsL, consonantsR = 0, 0
    ans = 0
    l = 0
    for r in range(n):
      if w[r] in d:
        vovels[d[w[r]]] = r
      else:
        consonants.append(r)
        consonantsR += 1
      while consonantsR - consonantsL > k:
        if w[l] in d:
          if l == vovels[d[w[l]]]:
            vovels[d[w[l]]] = -1
        else:
          consonantsL += 1
        l += 1
      if consonantsR - consonantsL == k and min(vovels) > -1:
        ans += 1 + min(consonants[consonantsL] if consonantsL < consonantsR else n, min(vovels)) - l 
    return ans