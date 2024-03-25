const intToRoman = (num) => {
  const arr = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let res = '';
  while (num) {
    for (const [val, char] of arr) {
      if (num >= val) {
        num -= val;
        res += char;
        break;
      }
    }
  }
  return res;
};