const reverseParentheses = (s) => {
  const portals = new Map(), st = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(i);
    } else if (s[i] === ')') {
      const j = st.pop();
      portals.set(j, i);
      portals.set(i, j);
    }
  }
  
  let i = 0, reverse = false, ans = '';
  while (i < s.length) {
    if (s[i] === '(' || s[i] === ')') {
      i = portals.get(i);
      reverse = !reverse;
    } else {
      ans += s[i];
    }
    reverse ? i-- : i++;
  }

  return ans;
};