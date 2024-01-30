const evalRPN = (tokens) => {
  const stack = [];
  for (let i = 0, p = -1; i < tokens.length; ++i) {
    if (tokens[i] === '+') { stack[--p] = stack[p] + stack[p + 1]; continue; }
    if (tokens[i] === '-') { stack[--p] = stack[p] - stack[p + 1]; continue; }
    if (tokens[i] === '*') { stack[--p] = stack[p] * stack[p + 1]; continue; }
    if (tokens[i] === '/') { stack[--p] = stack[p] / stack[p + 1] | 0; continue; }
    stack[++p] = +tokens[i];
  }
  return stack[0];
};