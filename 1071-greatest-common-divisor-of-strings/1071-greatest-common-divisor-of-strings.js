const gcdOfStrings = (a, b) => {
  let p = 0, divisor = '';
  for (let i = 0; i < a.length; ) {
    if (a[i] === b[i++] && a.length % i === 0 && b.length % i === 0) divisor = a.slice(0, i);
  }
  return (a+b).split(divisor).join('') === '' ? divisor : '';
};