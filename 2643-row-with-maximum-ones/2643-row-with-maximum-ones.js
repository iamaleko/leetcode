const rowAndMaximumOnes = (rows) => {
  let row = 0, ones = 0, i = -1, j, count;
  while (++i < rows.length) {
    count = 0;
    j = 0;
    while (j < rows[i].length) if (rows[i][j++]) ++count;
    if (count > ones) {
      row = i;
      ones = count;
    }
  }
  return [row, ones];
};