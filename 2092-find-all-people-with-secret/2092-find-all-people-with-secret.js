const findAllPeople = (n, meetings, f) => {
  const people = new Set([0,f]),
        frames = [];

  meetings.sort((a, b) => a[2] - b[2]);

  let lastTime;
  for (const [a, b, time] of meetings) {
    if (time !== lastTime) {
      frames.push([]);
      lastTime = time;
    }
    const frame = frames.at(-1);

    let ai, bi;
    for (const i in frame) {
      if (frame[i]) {
        if (frame[i].has(a)) ai = i;
        if (frame[i].has(b)) bi = i;
      }
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
      frame[ai] = undefined;
    }
  }

  for (let i = 0; i < frames.length; ++i) {
    frames[i] = frames[i].filter(set => set);
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