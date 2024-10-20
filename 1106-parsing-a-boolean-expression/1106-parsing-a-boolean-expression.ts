function parseBoolExpr(exp: string): boolean {
  const st: string[] = [];
  for (const ch of exp) {
    if (ch === '&' || ch === '|' || ch === '!' || ch === 't' || ch === 'f') {
      st.push(ch);
    } else if (ch === ')') {
      let t = false,
          f = false,
          peak = st.pop();
      while (peak === 't' || peak === 'f') {
        peak === 't' ? t = true : f = true;
        peak = st.pop();
      }
      if (peak === '|') {
        st.push(t || !f ? 't' : 'f');
      } else if (peak === '&') {
        st.push(t && !f ? 't' : 'f');
      } else if (peak === '!') {
        st.push(f ? 't' : 'f');
      }
    }
  }
  return st[0] === 't';
};