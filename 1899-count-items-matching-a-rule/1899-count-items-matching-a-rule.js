/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
const countMatches = (items, ruleKey, ruleValue) => {
  let count = 0, map = {type: 0, color: 1, name: 2};
  for (const item of items) {
    if (ruleValue === item[map[ruleKey]]) ++count;
  }
  return count;
};