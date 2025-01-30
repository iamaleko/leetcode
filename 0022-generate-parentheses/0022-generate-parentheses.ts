function generateParenthesis(available: number, str: string = '', opened: number = 0): string[] {
  if (opened && available) {
    return generateParenthesis(available - 1, str + '(', opened + 1)
      .concat(generateParenthesis(available, str + ')', opened - 1))
  } else if (opened) {
    return generateParenthesis(available, str + ')', opened - 1);
  } else if (available) {
    return generateParenthesis(available - 1, str + '(', opened + 1);
  }
  return [str];
};