class Solution:
  def canChange(self, a: str, b: str) -> bool:
    sb, rb, count = [], [], 0
    for i in range(len(b)):
      if b[i] != '_':
        sb.append(b[i])
      if b[i] == 'R':
        rb.append(count)
      count += 1
    lb, count = [], 0
    for i in range(len(b) -1, -1, -1):
      if b[i] == 'L':
        lb.append(count)
      count += 1
    sa, ra, count = [], [], 0
    for i in range(len(a)):
      if a[i] != '_':
        sa.append(a[i])
      if a[i] == 'R':
        ra.append(count)
      count += 1
    la, count = [], 0
    for i in range(len(a) -1, -1, -1):
      if a[i] == 'L':
        la.append(count)
      count += 1
    # check match
    if ''.join(sa) != ''.join(sb):
      return False
    # check index
    for i in range(len(la)):
      if la[i] > lb[i]:
        return False
    for i in range(len(ra)):
      if ra[i] > rb[i]:
        return False
    return True
        