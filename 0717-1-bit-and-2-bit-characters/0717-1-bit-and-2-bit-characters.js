const isOneBitCharacter = (bits) => {
  for (let i = 0; i < bits.length; ++i) {
    if (bits[i] === 0 && i + 1 === bits.length) return true;
    if (bits[i] === 1 && i + 1 < bits.length) ++i;
  }
  return false;
};