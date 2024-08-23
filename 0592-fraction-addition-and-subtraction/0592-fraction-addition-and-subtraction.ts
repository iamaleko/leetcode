function fractionAddition(expression: string): string {
  const simplify = (a, b): number[] => {
    let _a = a, _b = b;  
    while (_a) [_a, _b] = [_b % _a, _a];
    let gcd = Math.abs(_b);
    return [a / gcd, b / gcd];
  }
  const subtract = (a1,b1,a2,b2): number[] => simplify(a1 * b2 - a2 * b1, b1 * b2);
  const add = (a1,b1,a2,b2): number[] => simplify(a1 * b2 + a2 * b1, b1 * b2);
  const arr = expression.split('+').map((str) => {
    const arr = str.split('-');
    let a1: number|null = null,
        b1: number|null = null;
    if (!arr[0]) { arr.shift(); arr[0] = '-' + arr[0]; }
    for (let i = 0; i < arr.length; i++) {
      let [a2, b2] = arr[i].split('/').map(n => parseInt(n, 10));
      [a1, b1] = a1 === null ? [a2, b2] : subtract(a1, b1, a2, b2);
    }
    return [a1, b1];
  });
  let a1: number|null = null,
      b1: number|null = null;
  for (let i = 0; i < arr.length; i++) {
    let [a2, b2] = arr[i];
    [a1, b1] = a1 === null ? [a2, b2] : add(a1, b1, a2, b2);
  }

  return a1 + '/' + b1;
};