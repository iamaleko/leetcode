function minRemoveToMakeValid(s: string): string {
  const arr = s.split('');
  for (let b = 0, i = 0; i < arr.length; i++) {
    if (arr[i] === '(') { 
      b++;
    } else if (arr[i] === ')') {
       b--;
       if (b < 0) {
        arr[i] = '';
        b++;
       } 
    }
  }
  for (let b = 0, i = arr.length - 1; i > -1; i--) {
    if (arr[i] === ')') { 
      b++;
    } else if (arr[i] === '(') {
       b--;
       if (b < 0) {
        arr[i] = '';
        b++;
       } 
    }
  }
  return arr.join('');
};