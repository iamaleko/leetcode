class ListNode {
  constructor(data, prev, next) {
    this.data = data
    this.prev = prev
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(data) {
    const node = new ListNode(data, this.tail, null);
    if (this.tail) this.tail.next = node;
    this.tail = node;
    if (!this.head) this.head = node;
    this.size++
  }
  popleft() {
    const node = this.head;
    if (this.head.next) {
      this.head.next.prev = null;    
      this.head = this.head.next;
    } else {
      this.head = null
      this.tail = null
    }
    this.size--
    return node.data;
  }
}

const numIslands = function(grid) {
  let count = 0;
  for (let y in grid) {
    for (let x in grid[y]) {
      if (grid[y][x] !== '1') continue;
      
      x *= 1
      y *= 1

      const list = new LinkedList()
      list.append([y, x])
      grid[y][x] = '2';
    
      while (list.size) {
        let [y, x] = list.popleft();
        
        if (x > 0 && grid[y][x - 1] === '1') {
          grid[y][x - 1] = '2';
          list.append([y, x - 1]);
        }
        if (y > 0 && grid[y - 1][x] === '1') {
          grid[y - 1][x] = '2';
          list.append([y - 1, x]);
        }
        if (x < grid[0].length - 1 && grid[y][x + 1] === '1') {
          grid[y][x + 1] = '2';
          list.append([y, x + 1]);
        }
        if (y < grid.length - 1 && grid[y + 1][x] === '1') {
          grid[y + 1][x] = '2';
          list.append([y + 1, x]);
        }
      }

      ++count;
    }
  }
  return count;
};