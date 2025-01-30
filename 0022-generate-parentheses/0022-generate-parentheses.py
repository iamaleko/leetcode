class Solution:
  def generateParenthesis(self, available: int, s: str = '', opened: int = 0) -> List[str]:
    if opened and available:
      return self.generateParenthesis(available - 1, s + '(', opened + 1) + \
             self.generateParenthesis(available, s + ')', opened - 1)
    elif opened:
      return self.generateParenthesis(available, s + ')', opened - 1)
    elif available:
      return self.generateParenthesis(available - 1, s + '(', opened + 1)
    return [s]
        