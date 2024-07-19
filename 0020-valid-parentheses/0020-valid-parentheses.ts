function isValid(s: string): boolean {
  const st: string[] = [],
        dict: Readonly<Record<string, string>> = { '(': ')', '{': '}', '[': ']' };
  for (const ch of s) {
    const op = dict[ch];
    if (op) {
      st.push(op);
    } else if (st.pop() !== ch) {
      return false;
    }
  }
  return st.length === 0;
};