/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (str) => {
    const brackets = str.split(''),
          stack = [],
          pairs = {')':'(','}':'{',']':'['};
    for (let i = 0; i < brackets.length; i++) {
        const pair = pairs[brackets[i]];
        if (!pair) {
            stack.push(brackets[i])
        } else if (stack.pop() !== pair) {
            return false;
        }
    }
    return !stack.length;
};