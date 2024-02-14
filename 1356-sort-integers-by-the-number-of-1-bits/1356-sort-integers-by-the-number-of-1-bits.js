const sortByBits = (arr) => arr.sort((a, b, aa = 0, bb = 0, aaa, bbb) => {
  aaa = a, bbb = b;
  while (a) a &= a - 1, ++aa;
  while (b) b &= b - 1, ++bb;
  return aa - bb || aaa - bbb;
});