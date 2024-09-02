function chalkReplacer(chalk: number[], k: number): number {
  const chalkSum = chalk.reduce((sum, e) => sum += e);
  for (let lastIterationChalkSum = k % chalkSum, i = 0; i < chalk.length; i++) {
    lastIterationChalkSum -= chalk[i];
    if (lastIterationChalkSum < 0) return i;
  }
  return 0;
};