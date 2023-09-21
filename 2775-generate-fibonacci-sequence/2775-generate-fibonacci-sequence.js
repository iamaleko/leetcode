/**
 * @return {Generator<number>}
 */
const fibGenerator = function*() {
  let a = undefined, b = undefined;
  if (a === undefined) yield a = 0;
  if (b === undefined) yield b = 1;
  while(true) {
    yield a + b;
    [a,b] = [b, a + b];
  }
};