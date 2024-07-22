type Person = [string, number];

const sortPeople = (names: string[], heights: number[]): string[] => {
  const people: Person[] = [];
  for (let i = 0; i < names.length; i++) {
    people.push([names[i], heights[i]]);
  }
  people.sort((a, b) => b[1] - a[1]);
  return people.map(([name]) => name);
};