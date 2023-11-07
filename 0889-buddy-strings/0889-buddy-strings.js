const buddyStrings = (s, goal) => {
  if (s.length !== goal.length) return false;
  let ind = -1;
  for (const i in s) {
    if (s[i] !== goal[i]) {
      if (ind === -1) {
        ind = i;
      } else if (ind === -2) {
        return false;
      } else {
        if (s[ind] === goal[i] && goal[ind] === s[i]) {
          ind = -2; 
        } else {
          return false;
        }
      }
    }
  }
  return ind === -2 ? true : ind === -1 && (new Set(s).size < s.length);
};