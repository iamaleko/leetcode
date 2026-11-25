class Solution:
  def numUniqueEmails(self, emails: list[str]) -> int:
    s = set()
    for email in emails:
      a, b, k = False, False, []
      for ch in email:
        if ch == '+':
          b = True
        elif ch == '@':
          a = True
          b = False
          k.append(ch)
        elif not b and ch != '.' or a:
          k.append(ch)
      s.add(''.join(k))
    return len(s)
        