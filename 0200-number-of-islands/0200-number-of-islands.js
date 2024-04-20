/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  let count = 0;
  for (let y in grid) {
    for (let x in grid[y]) {
      if (grid[y][x] !== '1') continue;
      
      x *= 1
      y *= 1

      const queue = [];
      queue.push([y, x])
      grid[y][x] = '2';
    
      while (queue.length) {
        let [y, x] = queue.pop();
        
        if (x > 0 && grid[y][x - 1] === '1') {
          grid[y][x - 1] = '2';
          queue.push([y, x - 1]);
        }
        if (y > 0 && grid[y - 1][x] === '1') {
          grid[y - 1][x] = '2';
          queue.push([y - 1, x]);
        }
        if (x < grid[0].length - 1 && grid[y][x + 1] === '1') {
          grid[y][x + 1] = '2';
          queue.push([y, x + 1]);
        }
        if (y < grid.length - 1 && grid[y + 1][x] === '1') {
          grid[y + 1][x] = '2';
          queue.push([y + 1, x]);
        }
      }

      ++count;
    }
  }
  return count;
};