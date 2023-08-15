/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, max) {
    const lines = [[]];
    let length = 0;
    for (const word of words) {
      if (length + word.length + lines[lines.length - 1].length > max) {
        let spaces = max - length;
        let pointer = 0;
        while (spaces--) {
          lines[lines.length - 1][pointer] += ' ';
          pointer = pointer >= lines[lines.length - 1].length - 2 ? 0 : pointer + 1;
        }
        lines[lines.length - 1] = lines[lines.length - 1].join('');

        lines.push([]);
        length = 0;
      }
      lines[lines.length - 1].push(word);
      length += word.length;
    }

    lines[lines.length - 1] = lines[lines.length - 1].join(' ').padEnd(max, ' ');

    return lines;
};