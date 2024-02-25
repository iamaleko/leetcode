const findAllPeople = (n, meetings, f) => {
  const people = new Set([0,f]),
        frames = [],
        union = (l, r) => {
          for (const val of r) l.add(val);
          return l;
        };

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
      l.add(a);
      union(l, r);
      frame.delete(r);
    }
  }

  for (const frame of frames) {
    for (const set of frame) {
      for (const id of set) {
        if (people.has(id)) {
          union(people, set);
          break;
        }
      }
    }
  }
  
  return Array.from(people);
};