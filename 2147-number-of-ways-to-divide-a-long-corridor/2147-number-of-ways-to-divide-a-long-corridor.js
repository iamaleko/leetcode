/**
 * @param {string} corridor
 * @return {number}
 */
const numberOfWays = function(corridor) {
  let i = corridor.indexOf('S');
  if (i < 0) return 0;
  
  let vars = 1, seats = 0, plants = 0;
  for (;i < corridor.length; ++i) {
    if (corridor[i] === 'S') {
      ++seats;
      if (seats === 2) {
        if (plants) {
          vars = (vars * (plants+1)) % (1e9+7)
          plants = 0;
        }
        seats = 0;
      }
    } else {
      if (seats === 0) {
        ++plants;
      }
    }
  }
  
  return seats > 0 ? 0 : vars;
};