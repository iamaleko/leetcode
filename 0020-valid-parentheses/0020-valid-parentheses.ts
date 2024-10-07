function isValid(s: string): boolean {
  const dict = { '(': ')', '[': ']', '{':'}' };
  const st: string[] = [];
  for (const ch of s) {
    if (dict[ch]) {
      st.push(dict[ch])
    } else if (st.pop() !== ch) {
      return false;
    }
  }
  return st.length === 0;
};