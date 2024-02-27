const simplifyPath = (path) => {
  let s = '';
  path += '/';
  for (const chr of path) {
    s += chr;
    if (s.endsWith('/./')) {
      s = s.slice(0, -2);
    } else if (s.endsWith('/../')) {
      const slash = s.length === '/../' ? -1 : s.lastIndexOf('/', s.length - 5);
      s = ~slash ? s.slice(0, slash + 1) : s.slice(0, -3);
    } else if (s.endsWith('//')) {
      s = s.slice(0, -1);
    }
  }
  return s.slice(0, -1) || '/';
};