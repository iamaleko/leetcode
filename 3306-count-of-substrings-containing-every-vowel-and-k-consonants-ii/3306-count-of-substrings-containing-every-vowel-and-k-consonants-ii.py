class Solution:
  def countOfSubstrings(self, w: str, k: int) -> int:
    n = len(w)
    d = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
    consonants, vovels = [], [-1,-1,-1,-1,-1]
    ans = 0
    c, l = 0, 0
    for r in range(n):
      if w[r] in d:
        vovels[d[w[r]]] = r
      else:
        consonants.append(r)
      while len(consonants) - c > k:
        if w[l] in d:
          if l == vovels[d[w[l]]]:
            vovels[d[w[l]]] = -1
        else:
          c += 1
        l += 1
      if len(consonants) - c == k and min(vovels) > -1:
        ans += 1 + min(consonants[c] if c < len(consonants) else n, min(vovels)) - l 
    return ans