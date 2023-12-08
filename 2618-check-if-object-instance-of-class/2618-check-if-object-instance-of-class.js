const checkIfInstanceOf = (obj, constructor) => {
  return constructor instanceof Function && (
     obj instanceof constructor ||
     obj?.constructor === constructor ||
     obj?.constructor instanceof constructor
  );
};