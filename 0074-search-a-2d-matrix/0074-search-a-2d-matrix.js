const searchMatrix = (matrix, target) => {
  let left = 0,
      width = matrix[0].length,
      right = matrix.length * width - 1,
      center,
      getIndex = (i) => { return matrix[i / width | 0][i % width] };
  while (left < right) {
    center = (left + right) / 2 | 0;
    if (getIndex(center) < target) { left = center + 1 }
    else { right = center }
  }
  return getIndex(left) === target;
};