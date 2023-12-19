const imageSmoother = (img) => {
  const res = [], w = img[0].length - 1, h = img.length - 1;
  
  for (let y = 0; y < h + 1; ++y) {
    res[y] = [];
    for (let x = 0; x < w + 1; ++x) {
      let sum = img[y][x], cnt = 1;
      
      if (y > 0) {
        sum += img[y - 1][x];
        ++cnt;
        if (x > 0) {
          sum += img[y - 1][x - 1];
          ++cnt;
        }
        if (x < w) {
          sum += img[y - 1][x + 1];
          ++cnt;
        }
      }
      if (y < h) {
        sum += img[y + 1][x];
        ++cnt;
        if (x > 0) {
          sum += img[y + 1][x - 1];
          ++cnt;
        }
        if (x < w) {
          sum += img[y + 1][x + 1];
          ++cnt;
        }
      }
      if (x > 0) {
        sum += img[y][x - 1];
        ++cnt;
      }
      if (x < w) {
        sum += img[y][x + 1];
        ++cnt;
      }
      
      res[y][x] = sum / cnt | 0;
    }
  }
  
  return res;
};