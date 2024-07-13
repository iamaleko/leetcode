const maximumGain = (s, x, y) => {
  let a = 'ab', av = x, b = 'ba', bv = y;
  if (y > x) [a,b,av,bv] = [b,a,bv,av];
  let st = [], ans = 0;

  for (let i = 0; i < s.length; i++) {
    if (st.length && st[st.length - 1] + s[i] === a) {
      st.pop();
      ans += av;
    } else {
      st.push(s[i]);
    }
  }

  s = st.reverse().join('');
  st = [];
  for (let i = 0; i < s.length; i++) {
    if (st.length && st[st.length - 1] + s[i] === a) {
      st.pop();
      ans += bv;
    } else {
      st.push(s[i]);
    }
  }
  
  return ans;
};