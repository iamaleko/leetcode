const once = (fn) => {
  let invoked;
  return (...args) => {
    if (!invoked) {
      invoked = true;
      return fn(...args);
    }
  };
};