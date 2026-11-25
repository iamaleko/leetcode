class Solution:
  def numUniqueEmails(self, emails: list[str]) -> int:
    ans = 0
    d = {}
    for email in emails:
      [local, domain] = email.split('@', 1)
      local = ''.join(['' if a == '.' else a for a in local.split('+', 1)[0]])
      if domain not in d:
        d[domain] = set([local])
        ans+=1
      elif local not in d[domain]:
        d[domain].add(local)
        ans+=1
    return ans
        