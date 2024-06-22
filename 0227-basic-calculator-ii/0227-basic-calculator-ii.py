class Solution:
  def calculate(self, s: str) -> int:
    st = []
    for ch in s:
      if ch == ' ':
        continue
      elif ch in ['+', '-', '*', '/']:
        if len(st) > 2:
          if st[-2] == '*':
            b = st.pop()
            st.pop()
            a = st.pop()
            st.append(a * b)
          elif st[-2] == '/':
            b = st.pop()
            st.pop()
            a = st.pop()
            st.append(a // b)
        st.append(ch)
      elif st and type(st[-1]) is int:
        st[-1] *= 10
        st[-1] += int(ch)
      else:
        st.append(int(ch))
    if len(st) > 2:
      if st[-2] == '*':
        b = st.pop()
        st.pop()
        a = st.pop()
        st.append(a * b)
      elif st[-2] == '/':
        b = st.pop()
        st.pop()
        a = st.pop()
        st.append(a // b)
    st.reverse()
    while len(st) > 2:
      if st[-2] == '+':
        a = st.pop()
        st.pop()
        b = st.pop()
        st.append(a + b)
      elif st[-2] == '-':
        a = st.pop()
        st.pop()
        b = st.pop()
        st.append(a - b)
    return st[0]
        