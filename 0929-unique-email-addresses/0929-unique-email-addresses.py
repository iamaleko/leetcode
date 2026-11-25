class Solution:
  def numUniqueEmails(self, emails: list[str]) -> int:
    s = set()
    for email in emails:
      [local, domain] = email.split('@', 1)
      s.add(''.join(['' if a == '.' else a for a in local.split('+', 1)[0]]) + '@' + domain)
    return len(s)
        