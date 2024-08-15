function lemonadeChange(bills: number[]): boolean {
  const count: Record<number, number> = {};
  for (let bill of bills) {
    count[bill] = (count[bill] ?? 0) + 1;
    bill -= 5;
    main: while (bill) {
      for (const change of [10, 5]) {
        if (bill >= change && count[change]) {
          bill -= change;
          count[change]--;
          continue main;
        }
      }
      break;
    }
    if (bill) return false;
  }
  return true;
};