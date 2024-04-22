const openLock = (deadends, target) => {
  const visited = new Set();
  for (const deadend of deadends) visited.add(deadend);
  if (visited.has('0000')) return -1;
  const queue = [['0000', 0]];
  while (queue.length) {
    [point, step] = queue.shift()
    if (point === target) return step;
    for (let i = 0; i < 4; i++) {
      for (let s = -1; s < 2; s += 2) {
        const n = +point[i];
        const nb = point.slice(0, i) + Math.abs((10 + n + s)) % 10 + point.slice(i + 1);
        if (!visited.has(nb)) {
          visited.add(nb)
          queue.push([nb, step + 1]);
        }
      }
    }
  }
  return -1;
};