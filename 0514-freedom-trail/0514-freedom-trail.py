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

    spent = {}
    for rp in m[key[0]]:
      if rp in spent:
        spent[rp] = min(cost(0, rp), spent[rp])
      else:
        spent[rp] = cost(0, rp)
    # print(0, spent)

    for kp in range(1, len(key)):
      _spent = {}
      for rp in m[key[kp]]:
        for prp in spent:
          if rp in _spent:
            _spent[rp] = min(spent[prp] + cost(prp, rp), _spent[rp])
          else:
            _spent[rp] = spent[prp] + cost(prp, rp)
      # print(kp, _spent)
      spent = _spent

    return min(spent.values())