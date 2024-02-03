const expect = (a) => ({
  toBe(b) {
    if (a === b) return true;
    throw "Not Equal";
  },
  notToBe(b) {
    if (a !== b) return true;
    throw "Equal";
  },
});