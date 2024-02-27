const simplifyPath = (path) => {
  let s = '';
  path += '/';
  for (const chr of path) {
    if (chr === '/') {
      if (s.endsWith('/.')) {
        s = s.slice(0, -2);
      } else if (s.endsWith('/..')) {
        s = s.slice(0, s.lastIndexOf('/', s.length - 4));
      } else if (s.at(-1) === '/') {
        s = s.slice(0, -1);
      }
    }
    s += chr;
  }
  return s.slice(0, -1) || '/';
};