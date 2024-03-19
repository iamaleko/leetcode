const leastInterval = (tasks, n) => {
  // create freq
  const freq = [];
  tasks.sort();
  let last = tasks[0], cnt = 1;
  for (let i = 1; i < tasks.length; i++) {
    if (last !== tasks[i]) {
      freq.push([last, cnt, -Infinity]);
      cnt = 1;
      last = tasks[i];
    } else {
      cnt++;
    }
  }
  freq.push([last, cnt, -Infinity]);
  freq.sort((a, b) => b[1] - a[1]);
  // console.log('freq', freq)

  // start solving
  let step = 0, left = tasks.length, idle = 0;
  while (left) {
    let op;
    for (let i = 0; i < freq.length; i++) if (freq[i][2] < step - n) { op = i; break; }
    if (op === undefined) {
      step++;
      // idle++;
      continue;
    }
    // if (idle) {console.log('perform', step, 'idle', idle); idle = 0;}
    freq[op][1]--;
    freq[op][2] = step;
    left--;
    
    // console.log('perform', freq[op][0], step)
    if (freq[op][1] === 0) {
      freq.splice(op, 1);
      // console.log('remove', step, freq)
    } else if (op < freq.length - 1 && freq[op][1] < freq[op + 1][1]) {
      freq.sort((a, b) => b[1] - a[1]);
      // console.log('resort', step, freq)
    }
    step++;
  }

  return step;
};