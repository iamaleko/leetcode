enum Direction {
  Up = 't',
  Down = 'd',
  Left = 'l',
  Right = 'r',
};

function robotSim(commands: number[], obstacles: number[][]): number {
  // build index
  const y_index: Record<number, number[]> = {},
        x_index: Record<number, number[]> = {};
  for (const [x, y] of obstacles) {
    if (!y_index.hasOwnProperty(x)) y_index[x] = [];
    if (!x_index.hasOwnProperty(y)) x_index[y] = [];
    y_index[x].push(y);
    x_index[y].push(x);
  }
  for (const x in y_index) y_index[x].sort((a, b) => a - b);
  for (const y in x_index) x_index[y].sort((a, b) => a - b);
  // search next obstacle
  const search = (x: number, y: number, d: Direction): number | undefined => {
    const index = d === Direction.Up || d === Direction.Down ? y_index[x] : x_index[y];
    if (index === undefined) return undefined;
    let l = 0,
        r = index.length - 1,
        c:number,
        t = d === Direction.Up ? y :
            d === Direction.Down ? y :
            d === Direction.Right ? x : x;
    // console.log(index, t)
    while (l <= r) {
      c = l + r >>> 1;
      // if (d === Direction.Up || d === Direction.Right) {
        if (index[c] < t) { l = c + 1; } else { r = c - 1; }
      // } else {
      //   if (index[c] < t) { r = c - 1; } else { l = c + 1; }
      // }
    }
    return d === Direction.Up || d === Direction.Right ? index[l] : index[r];
  }
  // perform moves
  let max = 0, x = 0, y = 0, d = Direction.Up;
  // x = 23
  // y = -2
  // d = Direction.Down;
  // console.log('start', x, y, d);
  for (const command of commands) {
    if (command === -2) { // left
      // @ts-ignore
      d = d === Direction.Up ? Direction.Left : d === Direction.Left ? Direction.Down : d === Direction.Down ? Direction.Right : Direction.Up;
      // console.log('turn left', x, y, d);
    } else if (command === -1) { // right
      // @ts-ignore
      d = d === Direction.Up ? Direction.Right : d === Direction.Right ? Direction.Down : d === Direction.Down ? Direction.Left : Direction.Up;
      // console.log('turn right', x, y, d);
    } else {
      let n = search(x, y, d);
      if (!x && !y && n === 0) n = undefined;
      switch (d) {
        case Direction.Up: y = n === undefined ? y + command : Math.min(y + command, n - 1); break;
        case Direction.Down: y = n === undefined ? y - command : Math.max(y - command, n + 1); break;
        case Direction.Right: x = n === undefined ? x + command : Math.min(x + command, n - 1); break;
        case Direction.Left: x = n === undefined ? x - command : Math.max(x - command, n + 1); break;
      }
      // console.log('move to', x, y, d, [command, n]);
      if (x * x + y * y > max) max = x * x + y * y;
    }
  }
  // console.log('stop', x, y, d);
  return max;
};