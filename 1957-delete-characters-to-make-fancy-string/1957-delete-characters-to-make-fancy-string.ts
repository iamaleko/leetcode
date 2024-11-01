function makeFancyString(s: string): string {
  const st: string[] = [];
  for (let i = 0, p = -1, skip = ''; i < s.length; i++) {
    if (skip === s[i]) continue;
    skip = st[p++] === s[i] ? s[i] : '';
    st.push(s[i]);
  }
  return st.join('');
};