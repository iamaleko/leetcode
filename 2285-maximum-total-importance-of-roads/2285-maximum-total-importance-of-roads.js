const maximumImportance = (n, roads) => {
  const map = new Map();
  for (const [a, b] of roads) {
    if (!map.has(a)) map.set(a, { roads: 0, val: 0 });
    if (!map.has(b)) map.set(b, { roads: 0, val: 0 });
    map.get(a).roads += 1;
    map.get(b).roads += 1;
  }
  const arr = Array.from(map.values())
  arr.sort((a, b) => b.roads - a.roads)
  for (let i = 0; i < arr.length; i++) {
    arr[i].val = n--;
  }
  let sum = 0;
  for (const [a, b] of roads) {
    sum += map.get(a).val + map.get(b).val;
  }
  return sum;
};