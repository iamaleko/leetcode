const leastInterval = (tasks, n) => {
  // create queue
  const queue = [];
  tasks.sort();
  let last = tasks[0], repeats = 1;
  for (let i = 1; i < tasks.length; i++) {
    if (last !== tasks[i]) {
      queue.push([repeats, -Infinity]);
      repeats = 1;
      last = tasks[i];
    } else {
      repeats++;
    }
  }
  queue.push([repeats, -Infinity]);
  queue.sort((a, b) => b[0] - a[0]);

  // start performing tasks
  let ops = 0, left = tasks.length;
  while (queue.length) {
    // select task from queue O(32)
    let i = 0;
    for (; i < queue.length; i++) if (queue[i][1] < ops - n) break;

    // perform task
    if (i < queue.length) {
      queue[i][0]--;
      queue[i][1] = ops;
      
      // update queue
      if (queue[i][0] === 0) {
        queue.splice(i, 1); // dequeue if it is last task of this type
      } else if (i < queue.length - 1 && queue[i][0] < queue[i + 1][0]) {
        queue.sort((a, b) => b[0] - a[0]); // resort queue
      }
    }
    ops++;
  }

  return ops;
};