function makeFancyString(s: string): string {
  const st: string[] = [];
  for (let i = 0; i < s.length; i++) {
    if (st.at(-2) === s[i] && st.at(-1) === s[i]) continue;
    st.push(s[i]);
  }
  return st.join('');
};