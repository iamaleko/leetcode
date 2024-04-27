class Solution:
  def findRotateSteps(self, ring: str, key: str) -> int:
    ln = len(ring)

    m = defaultdict(list)
    for i, letter in enumerate(ring):
      m[letter].append(i)

    spent = {0: 0}
    for letter in key:
      _spent = {}
      for rp in m[letter]:
        for prp in spent:
          cost = spent[prp] + min(abs(prp - rp), ln - abs(prp - rp)) + 1
          if rp not in _spent or _spent[rp] > cost:
            _spent[rp] = cost
      spent = _spent

    return min(spent.values())