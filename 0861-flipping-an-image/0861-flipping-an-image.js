/**
 * @param {number[][]} image
 * @return {number[][]}
 */
const flipAndInvertImage = (image) => {
  for (const row of image) {
    row.reverse();
    for (const i in row) row[i] = row[i] ? 0 : 1;
  }
  return image;
};