const maxLength = (arr) => {
  const bits = (n, s = 0) => {
    while (n) n & 1 && ++s, n = n >> 1;
    return s;
  }

  const find = (n, p) =>
    ++p in arr ?
      n & arr[p] ?
        find(n, p) :
        Math.max(find(n, p), find(n | arr[p], p)) :
      bits(n);

  for (const i in arr) {
    let m = 0, j = 0;
    while (arr[i][j]) if (m === (m |= 1 << arr[i].charCodeAt(j++) - 97) && !(m = 0)) break;
    arr[i] = m;
  }

  return find(0, -1);
};



