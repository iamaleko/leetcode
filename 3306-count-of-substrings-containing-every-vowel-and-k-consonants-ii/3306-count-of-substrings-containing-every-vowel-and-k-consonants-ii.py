class Solution:
  def countOfSubstrings(self, w: str, k: int) -> int:
    d = {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
    vovel = [-1,-1,-1,-1,-1]
    cons = []
    ans = 0
    l = 0
    for r in range(len(w)):
      if w[r] in d:
        vovel[d[w[r]]] = r
      else:
        cons.append(r)
      while len(cons) > k:
        if w[l] in d:
          if l == vovel[d[w[l]]]:
            vovel[d[w[l]]] = -1
        else:
          heappop(cons)
        l += 1
      if len(cons) == k and min(vovel) > -1:
        ans += 1 + min(cons[0] if len(cons) else len(w), min(vovel)) - l 
        # print(l, cons[0] if len(cons) else inf, min(vovel))
    return ans