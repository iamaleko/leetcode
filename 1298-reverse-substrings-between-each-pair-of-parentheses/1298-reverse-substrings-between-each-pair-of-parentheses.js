const reverseParentheses = (s) => {
  const portals = {}, st = [];
  let ans = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      st.push(i);
    } else if (s[i] === ')') {
      portals[i] = st.pop();
      portals[portals[i]] = i;
    }
  }
  
  for (let i = 0, reverse = false; i < s.length; reverse ? i-- : i++) {
    if (s[i] === '(' || s[i] === ')') {
      i = portals[i];
      reverse = !reverse;
    } else {
      ans += s[i];
    }
  }

  return ans;
};