/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, max) {
    const lines = [[]];
    let length = 0, last = 0;
    for (const word of words) {
      last = lines.length - 1;
      if (length + word.length + lines[last].length > max) {
        let spaces = max - length;
        let pointer = 0;
        while (spaces--) {
          lines[last][pointer] += ' ';
          pointer = pointer >= lines[last].length - 2 ? 0 : pointer + 1;
        }
        lines[last] = lines[last].join('');

        lines.push([]);
        length = 0;
        ++last;
      }
      lines[last].push(word);
      length += word.length;
    }

    lines[last] = lines[last].join(' ').padEnd(max, ' ');

    return lines;
};