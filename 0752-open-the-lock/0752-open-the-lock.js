// const openLock = (deadends, target) => {
//   const visited = new Set();
//   for (const deadend of deadends) visited.add(deadend);
//   if (visited.has('0000')) return -1;
//   const queue = [['0000', 0]];
//   while (queue.length) {
//     [point, step] = queue.shift()
//     if (point === target) return step;
//     for (let i = 0; i < 4; i++) {
//       for (let s = -1; s < 2; s += 2) {
//         const nb = point.slice(0, i) + Math.abs(10 + ~~point[i] + s) % 10 + point.slice(i + 1);
//         if (!visited.has(nb)) {
//           visited.add(nb)
//           queue.push([nb, step + 1]);
//         }
//       }
//     }
//   }
//   return -1;
// };

class Node {
  constructor(val, prev, next) {
    this.val = val
    this.prev = prev
    this.next = next
  }
}
class Deque {
  constructor() {
    this.tail = null
    this.head = null
    this.size = 0
  }
  append(val) {
    const node = new Node(val, this.tail, null);
    this.tail ? this.tail.next = node : this.head = node;
    this.tail = node;
    this.size++;
  }
  popleft() {
    if (this.size) {
      const node = this.head;
      this.head = this.head.next;
      this.head ? this.head.prev = null : this.tail = null;
      this.size--;
      return node.val;
    }
    return null
  }
}
const openLock = (deadends, target) => {
  const visited = new Set();
  for (const deadend of deadends) visited.add(deadend);
  if (visited.has('0000')) return -1;
  const queue = new Deque();
  queue.append(['0000', 0]);
  while (queue.size) {
    [point, step] = queue.popleft()
    if (point === target) return step;
    for (let i = 0; i < 4; i++) {
      for (let s = -1; s < 2; s += 2) {
        const nb = point.slice(0, i) + Math.abs(10 + ~~point[i] + s) % 10 + point.slice(i + 1);
        if (!visited.has(nb)) {
          visited.add(nb)
          queue.append([nb, step + 1]);
        }
      }
    }
  }
  return -1;
};