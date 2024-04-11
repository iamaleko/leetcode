const compactObject = (obj) => {
  if (Array.isArray(obj)) {
    obj = obj.filter(e => e);
  }
  for (const key in obj)
    if (obj.hasOwnProperty(key)) {
      if (!obj[key]) {
        delete obj[key];
      } else if (typeof obj[key] === "object") {
        obj[key] = compactObject(obj[key]);
      }
    }
  return obj;
};