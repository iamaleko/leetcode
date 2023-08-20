const kidsWithCandies = (candies, extraCandies) => {
  const max = Math.max(...candies) - 1;
  for (const i in candies) candies[i] = candies[i] + extraCandies > max;
  return candies;
};