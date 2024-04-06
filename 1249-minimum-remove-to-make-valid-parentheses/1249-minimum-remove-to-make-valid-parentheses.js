const minRemoveToMakeValid = (s) => {
  const st = [''];
  let p = 0, u = -1;
  for (const char of s) {
    if (char === '(') {
      st[p] += '(';
      st.push('');
      u = p++;
    }
    else if (char === ')') {
      if (st[u]) {
        st[p--] += ')';
        st[u--] += st.pop();
      }
    }
    else { st[p] += char; }
  }
  while (u > -1) {
    st[u] = st[u].slice(0,-1) + st.pop();
    u--;
  }
  return st[0];
};