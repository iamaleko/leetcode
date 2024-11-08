function exclusiveTime(n: number, logs: string[]): number[] {
  const ans: number[] = new Array(n).fill(0),
        st: [number, number][] = [];
  let last = -1;
  for (const log of logs) {
    const data = log.split(':'),
          id = parseInt(data[0], 10),
          ts = parseInt(data[2], 10);
    if (data[1] === 'start') {
      if (st.length) ans[st.at(-1)[0]] += ts - Math.max(st.at(-1)[1], last) - 1;
      st.push([id, ts - 1]);
      last = ts - 1;
    } else {
      ans[st.pop()[0]] += ts - last;
      last = ts;
    }
  }
  return ans;
};