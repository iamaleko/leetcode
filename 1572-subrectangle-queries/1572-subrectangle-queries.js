class SubrectangleQueries {
  rect;

  constructor(rect) {
    this.rect = rect;
  }

  updateSubrectangle(y1, x1, y2, x2, val) {
    while (y1 <= y2) {
      let xn = x1;
      while (xn <= x2) {
        this.rect[y1][xn] = val
        ++xn;
      }
      ++y1;
    }
  }

  getValue(y, x) {
    return this.rect[y][x];
  }
}