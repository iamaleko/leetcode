const compress = (chars) => {
  let p = 0;
  if (chars.length) {
    for (let last = chars[0], cnt = 1, i = 1; i <= chars.length; i++) {
      if (chars[i] !== last) {
        chars[p++] = last;
        last = chars[i];
        if (cnt > 1) {
          cnt = "" + cnt;
          for (let j = 0; j < cnt.length; j++) chars[p++] = cnt[j];
        }
        cnt = 1;
      } else {
        ++cnt;
      }
    }
  }
  return p;
};