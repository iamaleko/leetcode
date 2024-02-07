const frequencySort = (s) => {
  const arr = new Array(122).fill('');
  for (let i = 0; i < s.length; arr[s.charCodeAt(i)] += s[i++]);
  return arr.sort((a, b) => b.length - a.length).join``;
};