const countTestedDevices = (arr) => {
  let tested = 0;
  for (const val of arr) if (val - tested > 0) ++tested;
  return tested;
};