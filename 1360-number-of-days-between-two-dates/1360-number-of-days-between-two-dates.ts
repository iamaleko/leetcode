function daysBetweenDates(date1: string, date2: string): number {
  const a = new Date(date1).getTime(),
        b = new Date(date2).getTime();
  return Math.abs(a - b) / (1000 * 60 * 60 * 24);
};