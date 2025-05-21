class Solution(object):
  def pushDominoes(self, dominoes):
    ans = ''
    l = -1
    for r in range(len(dominoes := 'L' + dominoes + 'R')):
      if dominoes[r] != '.':
        if n := r - l - 1:
          if dominoes[l] == 'L':
            ans += ('L' if dominoes[r] == 'L' else '.') * n
          else:
            ans += 'R' * n if dominoes[r] == 'R' else 'R' * (n // 2) + '.' * (n & 1) + 'L' * (n // 2)
        ans += dominoes[r]
        l = r
    return ans[1:-1]
