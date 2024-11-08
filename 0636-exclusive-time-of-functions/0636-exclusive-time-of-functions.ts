function exclusiveTime(n: number, logs: string[]): number[] {
  const ans: number[] = new Array(n).fill(0);
  const st: [number, number][] = [];
  let last = -1;
  for (const log of logs) {
    const data = log.split(':');
    const id = parseInt(data[0], 10);
    const isStart = data[1] === 'start';
    const ts = parseInt(data[2], 10);
    if (isStart) {
      if (st.length) {
        ans[st.at(-1)[0]] += ts - Math.max(st.at(-1)[1], last) - 1;
      }
      st.push([id, ts - 1]);
      last = ts - 1;
    } else {
      ans[st.at(-1)[0]] += ts - last;
      st.pop();
      last = ts;
    }
    // console.log(st, last, ans)
  }
  return ans;
};