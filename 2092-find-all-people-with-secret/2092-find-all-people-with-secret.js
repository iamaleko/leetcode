const findAllPeople = (n, meetings, f) => {
  meetings.sort((a, b) => a[2] - b[2]);
  let lastTime;
  const frames = [];
  for (const [a, b, time] of meetings) {
    if (time !== lastTime) {
      frames.push([]);
      lastTime = time;
    }
    const frame = frames.at(-1);

    let ai, bi;
    for (const i in frame) {
      if (frame[i].has(a)) ai = i;
      if (frame[i].has(b)) bi = i;
    }

    if (ai === undefined && bi === undefined) {
      frame.push(new Set([a,b]));
    } else if (ai !== undefined && bi === undefined) {
      frame[ai].add(b);
    } else if (ai === undefined && bi !== undefined) {
      frame[bi].add(a);
    } else if (ai !== bi) {
      for (const id of frame[ai]) frame[bi].add(id);
      frame[bi].add(a);
      frame.splice(ai, 1);
    }
  }

  // console.log(frames);
  const people = new Set([0,f]);

  for (const frame of frames) {
    for (const set of frame) {
      for (const whom of set) {
        if (people.has(whom)) {
          for (const id of set) people.add(id);
          break;
        }
      }
    }
  }
  
  return Array.from(people);
};


  // meetings.sort((a, b) => a[2] - b[2]);
  // // const frames = [];
  // // const merge = (i) => {
  // //   const map = frames[i];
  // //   if (map) {
  // //     for (const [who, set] of map) {
  // //       for (const whom of set) {
  // //         if (map.has(whom)) {
  // //           map.get(whom).add(who);
  // //           set.delete(whom);
  // //         }
  // //       }
  // //       if (set.size === 0) map.delete(who);
  // //     }
  // //     frames[i] = [];
  // //     for (const [who, set] of map) {
  // //       set.add(who);
  // //       frames[i].push(set);
  // //     }
  // //   }
  // // };

  // let lastTime;
  // for (const [a, b, time] of meetings) {
  //   if (time !== lastTime) {
  //     // if (lastTime !== undefined) merge(frames.length - 1);
  //     frames.push(new Map());
  //     lastTime = time;
  //   }
  //   // const map = frames.at(-1);
  //   // if (map.has(a)) {
  //   //   map.get(a).add(b);
  //   // } else if (map.has(b)) {
  //   //   map.get(b).add(a);
  //   // } else {
  //   //   map.set(a, new Set([b]))
  //   //   map.set(b, new Set([a]))
  //   // }
  // }
  // // merge(frames.length - 1);