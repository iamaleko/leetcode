const compress = (chars) => {
  let p = 0, last = chars[0];
  if (chars.length) {
    let cnt = 1;
    for (let i = 1; i <= chars.length; i++) {
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