const maximumGain = (s, x, y) => {
  let str = 'ab', st = [], ans = 0;
  if (y > x) [str,x,y] = ['ba',y,x];

  for (const chr of s) {
    if (st.length && st[st.length - 1] + chr === str) {
      st.pop();
      ans += x;
    } else {
      st.push(chr);
    }
  }

  s = st.reverse().join('');
  st = [];
  for (const chr of s) {
    if (st.length && st[st.length - 1] + chr === str) {
      st.pop();
      ans += y;
    } else {
      st.push(chr);
    }
  }
  
  return ans;
};