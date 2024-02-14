const countSubstrings = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length; ++i)
    for (let rtl = '', j = i; j < s.length; ++j)
      if (s.substring(i, j + 1) === (rtl = s[j] + rtl)) ++sum;
  return sum;
};