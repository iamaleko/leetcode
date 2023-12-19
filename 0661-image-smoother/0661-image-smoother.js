const imageSmoother = (img) => {
  const w = img[0].length - 1, h = img.length - 1, res = [];
  let y, x;
  
  if (w > 1 && h > 1) {
    res[0] = [];
    res[h] = [];
    
    // corners
    res[0][0] = (img[0][0] + img[0][1] + img[1][1] + img[1][0]) / 4 | 0;
    res[h][0] = (img[h][0] + img[h][1] + img[h-1][1] + img[h-1][0]) / 4 | 0;
    res[0][w] = (img[0][w] + img[0][w-1] + img[1][w-1] + img[1][w]) / 4 | 0;
    res[h][w] = (img[h][w] + img[h][w-1] + img[h-1][w-1] + img[h-1][w]) / 4 | 0;

    // edges
    for (x = 1; x < w; ++x) {
      res[0][x] = (img[0][x] + img[0][x-1] + img[0][x+1] + img[1][x-1] + img[1][x+1] + img[1][x]) / 6 | 0;
      res[h][x] = (img[h][x] + img[h][x-1] + img[h][x+1] + img[h-1][x-1] + img[h-1][x+1] + img[h-1][x]) / 6 | 0;
    }
    for (y = 1; y < h; ++y) {
      res[y] = [];
      res[y][0] = (img[y][0] + img[y-1][0] + img[y+1][0] + img[y-1][1] + img[y+1][1] + img[y][1]) / 6 | 0;
      res[y][w] = (img[y][w] + img[y-1][w] + img[y+1][w] + img[y-1][w-1] + img[y+1][w-1] + img[y][w-1]) / 6 | 0;
    }

    // center 
    for (y = 1; y < h; ++y) {
      for (x = 1; x < w;) {
        res[y][x] = (
          img[y][--x] +
          img[y-1][x] + 
          img[y+1][x] + 
          
          img[y][++x] + 
          img[y-1][x] + 
          img[y+1][x] + 
          
          img[y][++x] +
          img[y-1][x] +
          img[y+1][x]
        ) / 9 | 0;
      }
    }
  } else {
    for (y = 0; y < h + 1; ++y) {
      res[y] = [];
      for (x = 0; x < w + 1; ++x) {
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
  }
  
  return res;
};