class Solution(object):
  def pushDominoes(self, dominoes):
    ans = ''
    l = -1
    dominoes = 'L' + dominoes + 'R'
    for r, ch in enumerate(dominoes):
      if ch == '.':
        continue
      if l != r - 1:
        if dominoes[l] == 'L' and ch == 'L':
          ans += 'L' * (r - l - 1)
        elif dominoes[l] == 'R' and ch == 'R':
          ans += 'R' * (r - l - 1)
        elif dominoes[l] == 'L' and ch == 'R':
          ans += '.' * (r - l - 1)
        elif dominoes[l] == 'R' and ch == 'L':
          ans += 'R' * ((r - l - 1) // 2) + ('.' if (r - l - 1) & 1 else '') + 'L' * ((r - l - 1) // 2)
      ans += ch
      l = r
    return ans[1:-1]
