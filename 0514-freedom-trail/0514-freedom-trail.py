class Solution:
  def findRotateSteps(self, ring: str, key: str) -> int:
    ln = len(ring)

    m = defaultdict(list)
    for i, letter in enumerate(ring):
      m[letter].append(i)

    spent = {0: 0}
    for letter in key:
      _spent = defaultdict(lambda: math.inf)
      for rp in m[letter]:
        for prp in spent:
          _spent[rp] = min(_spent[rp], spent[prp] + min(abs(prp - rp), ln - abs(prp - rp)) + 1)
      spent = _spent

    return min(spent.values())