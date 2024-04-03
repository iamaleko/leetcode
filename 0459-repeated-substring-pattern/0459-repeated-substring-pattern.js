const repeatedSubstringPattern = (s) => {
  if (s.length < 2) return false;
  for (let i = 0; i < (s.length / 2); i++) {
    const part = s.slice(0, i + 1);
    if (s.split(part).length === s.length / part.length + 1) return true;
  }
  return false;
};