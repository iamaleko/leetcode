const floodFill = (image, x, y, color) => {
    const from = image[x][y],
          w = image.length - 1,
          h = image[0].length - 1,
          dp = (x, y) => {
        if (image[x][y] !== color) {
            image[x][y] = color;
            if (x > 0 && image[x - 1][y] === from) dp(x - 1, y);
            if (x < w && image[x + 1][y] === from) dp(x + 1, y);
            if (y > 0 && image[x][y - 1] === from) dp(x, y - 1);
            if (y < h && image[x][y + 1] === from) dp(x, y + 1);
        }
    }
    dp(x, y);
    return image;
};