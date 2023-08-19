const finalValueAfterOperations = ops => {
  let x = 0;
  for (const op of ops) op === '++X' || op === 'X++' ? ++x : --x;
  return x;
}