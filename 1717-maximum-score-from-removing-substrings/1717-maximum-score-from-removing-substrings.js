const maximumGain = (s, x, y) => {
  let a = 'ab', av = x, b = 'ba', bv = y, st = [], ans = 0;
  if (y > x) [a,b,av,bv] = [b,a,bv,av];

  for (const chr of s) {
    if (st.length && st[st.length - 1] + chr === a) {
      st.pop();
      ans += av;
    } else {
      st.push(chr);
    }
  }

  s = st.reverse().join('');
  st = [];
  for (const chr of s) {
    if (st.length && st[st.length - 1] + chr === a) {
      st.pop();
      ans += bv;
    } else {
      st.push(chr);
    }
  }
  
  return ans;
};