class Solution:
  def findRotateSteps(self, ring: str, key: str) -> int:
    def cost(i, k):
      return min(
        abs(i - k),
        len(ring) + i - k,
        len(ring) + k - i
      ) + 1

    m = defaultdict(list)
    for i, letter in enumerate(ring):
      m[letter].append(i)

    spent = {0: 0}

    for kp in range(len(key)):
      _spent = {}
      for rp in m[key[kp]]:
        for prp in spent:
          if rp in _spent:
            _spent[rp] = min(spent[prp] + cost(prp, rp), _spent[rp])
          else:
            _spent[rp] = spent[prp] + cost(prp, rp)
      spent = _spent

    return min(spent.values())