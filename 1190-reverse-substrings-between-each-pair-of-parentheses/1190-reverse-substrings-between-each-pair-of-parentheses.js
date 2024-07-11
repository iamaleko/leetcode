const reverseParentheses = (s) => {
  const portals = new Map(), st = [];
  let ans = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(i);
    } else if (s[i] === ')') {
      const j = st.pop();
      portals.set(j, i);
      portals.set(i, j);
    }
  }
  
  for (let i = 0, reverse = false; i < s.length; reverse ? i-- : i++) {
    if (s[i] === '(' || s[i] === ')') {
      i = portals.get(i);
      reverse = !reverse;
    } else {
      ans += s[i];
    }
  }

  return ans;
};