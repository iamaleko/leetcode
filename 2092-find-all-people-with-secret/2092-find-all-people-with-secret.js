const findAllPeople = (n, meetings, f) => {
  const people = new Set([0,f]),
        frames = [];

  meetings.sort((a, b) => a[2] - b[2]);

  let lastTime;
  for (const [a, b, time] of meetings) {
    if (time !== lastTime) {
      frames.push(new Set());
      lastTime = time;
    }
    const frame = frames.at(-1);

    let l, r;
    for (const set of frame) {
      if (set.has(a)) l = set;
      if (set.has(b)) r = set;
      if (l && r) break;
    }

    if (!l && !r) {
      frame.add(new Set([a,b]));
    } else if (l && !r) {
      l.add(b);
    } else if (!l && r) {
      r.add(a);
    } else if (l !== r) {
      r.add(a);
      for (const id of l) r.add(id);
      frame.delete(l);
    }
  }

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