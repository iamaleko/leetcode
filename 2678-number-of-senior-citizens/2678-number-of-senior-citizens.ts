function countSeniors(details: string[]): number {
  let ans = 0;
  for (const passenger_data of details) {
    const age = parseInt(passenger_data[11], 10) * 10 + parseInt(passenger_data[12], 10);
    if (age > 60) ans++;
  }
  return ans;
};