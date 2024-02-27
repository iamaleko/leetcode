const canCompleteCircuit = (gas, cost) => {
  let sum = 0, station = 0, tank = 0;
  for (let i = 0; i < gas.length; i++) {
    let next = gas[i] - cost[i];
    sum += next;
    tank += next;
    if (tank < 0) {
      tank = 0;
      station = i + 1;
    }
  }
  return sum < 0 ? -1 : station;
};
