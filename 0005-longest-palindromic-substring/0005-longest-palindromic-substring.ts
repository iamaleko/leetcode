function bubbleFromCenter(s: string, l: number, r: number): string {
  while (l > -1 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r)
}

function longestPalindrome(s: string): string {
  let ans = ''; 
  for (let i = 0; i < s.length; i++) {
    const a = bubbleFromCenter(s, i, i),
          b = bubbleFromCenter(s, i, i + 1),
          t = a.length > b.length ? a : b;
    if(t.length > ans.length) ans = t
  }
  return ans
};