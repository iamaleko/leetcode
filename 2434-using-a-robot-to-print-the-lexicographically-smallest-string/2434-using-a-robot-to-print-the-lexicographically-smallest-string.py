class Solution:
  def robotWithString(self, s: str) -> str:
    st = deque()
    for i in range(len(s)):
      while st and st[-1] > s[i]:
        st.pop()
      st.append(s[i])
    # print(st)
    robot = []
    paper = []
    for i in range(len(s)):
      if st and s[i] == st[0]:
        st.popleft()
        paper.append(s[i])
      else:
        robot.append(s[i])
      while robot and (not st or robot[-1] <= st[0]):
        paper.append(robot.pop())
    return ''.join(paper)