const generateParenthesis = (n, str = '', l = 0) => {
  if (l && n) {
    return generateParenthesis(n - 1, str + '(', l + 1)
      .concat(generateParenthesis(n, str + ')', l - 1))
  } else if (l) {
    return generateParenthesis(n, str + ')', l - 1);
  } else if (n) {
    return generateParenthesis(n - 1, str + '(', l + 1);
  }
  return [str];
};