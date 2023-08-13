const isAnagram = (a, b) => {
  if (a.length !== b.length) return false; 
  const m = {};
  for (const c of a) m[c] ? ++m[c] : (m[c] = 1);
  for (const c of b) {
    if (!m[c]) return false;
    --m[c];
  }
  return true;
};