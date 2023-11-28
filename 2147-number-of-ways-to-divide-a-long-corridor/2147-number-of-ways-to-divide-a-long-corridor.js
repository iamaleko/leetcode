/**
 * @param {string} corridor
 * @return {number}
 */
const numberOfWays = function(corridor) {
  let seats_pairs = 0;
  let vars = 1;
  
  let seats = 0, plants = 0;
  for (const i in corridor) {
    const item = corridor[i];
    if (item === 'S') {
      ++seats;
      if (seats === 2) {
        if (plants) {
          vars = (vars * (plants+1)) % (1e9+7)
          plants = 0;
        }
        ++seats_pairs;
        seats = 0;
      }
    } else {
      if (seats_pairs && seats === 0) {
        ++plants;
      }
    }
  }
  
  if (seats > 0 || seats_pairs === 0) return 0;
  return vars;
};