class Solution:
  def isValidSudoku(self, board: List[List[str]]) -> bool:
    s = set()
    for row in range(9):
      for col in range(9):
        if board[row][col] != '.':
          val = int(board[row][col])
          box = row // 3 * 3 + col // 3
          if row+1<<4|val in s or col+1<<8|val in s or box+1<<12|val in s:
            return False
          s.add(row+1<<4|val)
          s.add(col+1<<8|val)
          s.add(box+1<<12|val)
    return True
        