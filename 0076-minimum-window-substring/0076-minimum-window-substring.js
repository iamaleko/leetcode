const minWindow = (s, t) => {
  const tmap = {}, smap = {};
  let l = 0,
      r = 0,
      to = -1,
      from = -1,
      matched = 0;
  for (const chr of t) tmap[chr] ? ++tmap[chr] : tmap[chr] = 1;
  while (true) {
    if (s.length - l < t.length) break;
    if (matched === t.length) {
      if (from === -1 || r - l < to - from) {
        to = r;
        from = l;
      }
      if (smap[s[l]] && tmap[s[l]] && --smap[s[l]] < tmap[s[l]]) --matched;
      ++l;
    } else {
      if (s[r] in tmap) {
        if (!smap[s[r]] || smap[s[r]] < tmap[s[r]]) ++matched;
        smap[s[r]] = (smap[s[r]] || 0) + 1;
      }
      r < s.length ? ++r : ++l;
    }
  }
  return s.substring(from, to);
};