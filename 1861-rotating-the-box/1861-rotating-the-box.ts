function rotateTheBox(box: string[][]): string[][] {
  enum Type {
    Stone = '#',
    Obstacle = '*',
    Empty = '.',
  }
  // move
  for (let y = 0; y < box.length; y++) {
    for (let e = null, x = box[y].length; x >= 0; x--) {
      switch (box[y][x]) {
        case Type.Empty:
          if (e === null) e = x;
        break;
        case Type.Obstacle:
          e = null;
        break;
        case Type.Stone:
          if (e !== null) {
            [box[y][x], box[y][e]] = [box[y][e], box[y][x]];
            while (e > x && box[y][e] !== Type.Empty) e--;
          }
        break;
      }
    }
  }
  // rotate
  const ans = new Array(box[0].length).fill('').map(() => new Array(box.length).fill(''));
  for (let y = 0; y < box.length; y++) {
    for (let x = 0; x < box[y].length; x++) {
      ans[x][box.length - y - 1] = box[y][x];
    }
  }
  return ans;
};