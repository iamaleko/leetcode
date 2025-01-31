function canBeValid(s: string, locked: string): boolean {
  const index: number[] = [],
    stack: boolean[] = [];
  for (let i = 0; i < s.length; i++) {
    if (locked[i] === '0') {
      stack.push(false);
    } else if (s[i] === ')') {
      if (!stack.length) return false;
      if (index.length) {
        stack[index.pop()] = false;
      }
      stack.pop();
    } else {
      index.push(stack.length);
      stack.push(true);
    }
  }
  let opened = 0,
    balanced = true;
  for (const item of stack) {
    if (item) {
      opened++;
    } else if (opened) {
      opened--;
    } else {
      balanced = !balanced;
    }
  }
  return opened == 0 && balanced;
};