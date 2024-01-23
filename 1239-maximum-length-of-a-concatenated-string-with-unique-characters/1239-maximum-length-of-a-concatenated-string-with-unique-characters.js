const maxLength = (arr) => {
  const bits = (n, s = 0) => {
    while (n) n & 1 && ++s, n = n >> 1;
    return s;
  }

  const find = (n, p) => p === arr.length ?
    bits(n) :
    n & arr[p] ?
      find(n, p + 1) :
      Math.max(find(n, p + 1), find(n | arr[p], p + 1));

  for (const i in arr) {
    let m = 0, j = 0;
    while (arr[i][j]) if (m === (m |= 1 << arr[i].charCodeAt(j++) - 97) && !(m = 0)) break;
    arr[i] = m;
  }

  return find(0, 0);
};



