class Solution:
    def robotWithString(self, s: str) -> str:
        cnt = Counter(s)
        stack = []
        res = []
        minCharacter = "a"
        for c in s:
            stack.append(c)
            cnt[c] -= 1
            while minCharacter != "z" and cnt[minCharacter] == 0:
                minCharacter = chr(ord(minCharacter) + 1)
            while stack and stack[-1] <= minCharacter:
                res.append(stack.pop())
        return "".join(res)

# class Solution:
#   def robotWithString(self, s: str) -> str:
#     st = deque()
#     for i in range(len(s)):
#       while st and s[st[-1]] > s[i]:
#         st.pop()
#       st.append(i)
#     print(st)
#     paper = []
#     robot = []
#     for i in range(len(s)):
#       robot.append(i)
#       if st and st[0] == i:
#         st.popleft()
#         while robot and (not st or robot[-1] <= st[0]):
#           paper.append(robot.pop())
#     return ''.join([s[i] for i in paper])

    