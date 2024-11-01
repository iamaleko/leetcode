function makeFancyString(s: string): string {
  const st: string[] = [];
  for (let i = 0, skip = ''; i < s.length; i++) {
    if (skip === s[i]) continue;
    skip = st.at(-1) === s[i] ? s[i] : '';
    st.push(s[i]);
  }
  return st.join('');
};