/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (fns) => {
  let last = fns.length - 1;
  const fn = (x) => last === -1 ? x : fn(fns[last--](x));
  return fn;
};