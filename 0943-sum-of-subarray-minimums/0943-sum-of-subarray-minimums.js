// const sumSubarrayMins = (arr) => {
//   let w = 2, i = 0, l = arr.length + 1, sum = arr.reduce((a, e) => a + e);
//   for (; w < l; ++w, i = 0) {
//     for (; i < l - w; ++i) {
//       if (arr[i] > arr[i + 1]) arr[i] = arr[i + 1]
//       sum += arr[i];
//     }
//   }
//   return sum % (1e9 + 7);
// };

const sumSubarrayMins = (arr) => {
  let sum = 0;

  const stack = [];
  const flush = (i) => {
    const lastIndex = stack.pop(),
          prevIndex = stack.length ? stack.at(-1) : -1,
          leftSubarraysCount = lastIndex - prevIndex,
          rightSubarraysCount = i - lastIndex;
    sum += leftSubarraysCount * rightSubarraysCount * arr[lastIndex];
  }

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack.at(-1)] >= arr[i]) flush(i);
    stack.push(i);
  }
  while (stack.length) flush(arr.length);

  return sum % (1e9 + 7);
};