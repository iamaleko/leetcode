function minAddToMakeValid(s: string): number {
  const st: string[] = [];
  for (const br of s) {
    if (br === ')' && st.at(-1) === '(') {
      st.pop();
    } else {
      st.push(br);
    }
  }
  return st.length;
};