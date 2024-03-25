const spiralOrder = (m) => {
  const RIGHT = 1;
  const BOTTOM = 2;
  const LEFT = 3;
  const TOP = 4;
  let x = 0,
      y = 0,
      minx = 0,
      miny = 0,
      maxx = m[0].length - 1,
      maxy = m.length - 1, dir = RIGHT;
  const res = [];
  cicle: while (true) {
    res.push(m[y][x]);
    switch (dir) {
      case RIGHT: if (x < maxx) { x++; } else if (y < maxy) { dir = BOTTOM; y++; miny++; } else { break cicle; } break;
      case BOTTOM: if (y < maxy) { y++; } else if (x > minx) { dir = LEFT; x--; maxx--; } else { break cicle; } break;
      case LEFT: if (x > minx) { x--; } else if (y > miny) { dir = TOP; y--; maxy--; } else { break cicle; } break;
      case TOP: if (y > miny) { y--; } else if (x < maxx) { dir = RIGHT; x++; minx++; } else { break cicle; } break;
    }
  }
  return res;
};