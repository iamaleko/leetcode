const checkIfInstanceOf = (obj, constructor) => {
  try {
    return obj instanceof constructor || obj.constructor === constructor || obj.constructor instanceof constructor;
  } catch (e) {
    return false;
  }
};