const simplifyPath = (path) => {
  let s = '';
  path += '/';
  for (let i = 0; i < path.length; i++) {
    if (path[i] === '/') {
      if (s.endsWith('/.')) {
        s = s.slice(0, -2);
      } else if (s.endsWith('/..')) {
        s = s.slice(0, s.lastIndexOf('/', s.length - 4));
      } else if (s.at(-1) === '/') {
        s = s.slice(0, -1);
      }
    }
    s += path[i];
  }
  return s.slice(0, -1) || '/';
};