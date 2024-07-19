function isValid(s: string): boolean {
  const st: string[] = [],
        dict: Readonly<Record<string, string>> = { '(': ')', '{': '}', '[': ']' };
  for (const ch of s) {
    if (ch in dict) {
      st.push(dict[ch]);
    } else if (st.pop() !== ch) {
      return false;
    }
  }
  return st.length === 0;
};