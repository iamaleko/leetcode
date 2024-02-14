const countSubstrings = (s) => {
  let sum = 0;
  for (let i = 0; i < s.length; ++i)
    for (let rtl = '', ltr = '', j = i; j < s.length; ++j)
      if ((ltr += s[j]) === (rtl = s[j] + rtl)) ++sum;
  return sum;
};