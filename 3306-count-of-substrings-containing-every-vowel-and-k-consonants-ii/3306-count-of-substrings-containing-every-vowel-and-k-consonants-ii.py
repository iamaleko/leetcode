class Solution:
  def countOfSubstrings(self, w: str, k: int) -> int:
    ans, n, d = 0, len(w), {'a': 0, 'e': 1, 'i': 2, 'o': 3, 'u': 4}
    c, v, m = [n] * n, [-1] * 5, -1
    cl, cr, wl = 0, 0, 0
    for wr in range(n):
      if w[wr] in d:
        v[d[w[wr]]] = wr
        m = min(v)
      else:
        c[cr] = wr
        cr += 1
      while cr - cl > k:
        if w[wl] in d:
          if wl == v[d[w[wl]]]:
            v[d[w[wl]]] = -1
            m = -1
        else:
          cl += 1
        wl += 1
      if cr - cl == k and m > -1:
        ans += 1 + min(c[cl], m) - wl
    return ans