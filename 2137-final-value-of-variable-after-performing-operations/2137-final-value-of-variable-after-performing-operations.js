const finalValueAfterOperations = ops => {
  let x = 0;
  for (const op of ops) op[1] === '+' ? ++x : --x;
  return x;
}