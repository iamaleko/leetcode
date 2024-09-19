function diffWaysToCompute(str: string): number[] {
  const operators: string[] = [],
        operands: number[] = [0];
  for (const ch of str) {
    if (ch === '+' || ch === '-' || ch === '*') {
      operators.push(ch);
      operands.push(0);
    } else {
      operands[operands.length - 1] = operands[operands.length - 1] * 10 + parseInt(ch);
    }
  }
  
  const calc = (i: number, j: number) => {
    let res = operands[i];
    for (let k = i + 1; k <= j; k++) {
      if (operators[k - 1] === '-') { res -= operands[k]; } else
      if (operators[k - 1] === '+') { res += operands[k]; } else
      if (operators[k - 1] === '*') { res *= operands[k]; }
    }
    return res;
  }

  const mem: Record<number, Record<number, number[]>> = {};
  const req = (i: number, j: number) => {
    if (i === j) return [operands[i]];
    if (!(i in mem)) mem[i] = {};
    if (j in mem[i]) return mem[i][j];
    mem[i][j] = [];
    for (let m = i; m < j; m++) {
      const as = req(i, m),
            bs = req(m + 1, j);
      for (const a of as) for (const b of bs) {
        if (operators[m] === '-') { mem[i][j].push(a - b); } else
        if (operators[m] === '+') { mem[i][j].push(a + b); } else
        if (operators[m] === '*') { mem[i][j].push(a * b); }
      }
    }
    return mem[i][j];
  }
  return req(0, operands.length - 1);
};
