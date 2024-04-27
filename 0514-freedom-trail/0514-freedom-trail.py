class Solution:
  def findRotateSteps(self, ring: str, key: str) -> int:
    ln = len(ring)

    def cost(i, k):
      return min(abs(i - k), ln - abs(i - k)) + 1

    m = defaultdict(list)
    for i, letter in enumerate(ring):
      m[letter].append(i)

    spent = {0: 0}
    for kp in range(len(key)):
      _spent = {}
      for rp in m[key[kp]]:
        for prp in spent:
          _cost = spent[prp] + cost(prp, rp)
          if rp not in _spent or _spent[rp] > _cost:
            _spent[rp] = _cost
      spent = _spent

    return min(spent.values())