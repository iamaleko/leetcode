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
  while (true) {
    if (s[i] === '(' || s[i] === ')') {
      i = portals.get(i);
      if (i === null) break;
      portals.delete(i)
      reverse = !reverse;
      reverse ? i-- : i++;
    } else {
      if (i < 0 || i >= s.length) break;
      ans += s[i];
      reverse ? i-- : i++;
    }
  }

  return ans;
};