class Solution:
  def numTilePossibilities(self, tiles: str) -> int:
    tiles = ''.join(sorted(list(tiles)))
    def back(m = 0, ans = 0, last = ''):
      for i in range(len(tiles)):
        if m & 1 << i or last == tiles[i]:
          continue
        last = tiles[i]
        ans += 1 + back(m | 1 << i)
      return ans
    return back()