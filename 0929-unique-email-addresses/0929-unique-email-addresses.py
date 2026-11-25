class Solution:
  def numUniqueEmails(self, emails: list[str]) -> int:
    s = set()
    for email in emails:
      [local, domain] = email.split('@', 1)
      s.add(''.join(local.split('+', 1)[0].replace('.','')) + '@' + domain)
    return len(s)
        