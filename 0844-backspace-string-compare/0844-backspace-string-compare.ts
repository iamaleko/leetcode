function backspaceCompare(s: string, t: string): boolean {
  const a = [];
  const b = [];
  for (const ch of s) ch === '#' ? a.pop() : a.push(ch);
  for (const ch of t) ch === '#' ? b.pop() : b.push(ch);
  return a.join() === b.join();
};