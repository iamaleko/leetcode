function bubbleFromCenter(s: string, left: number, right: number): string {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right)
}

function longestPalindrome(s: string): string {
  let ans = ''; 
  for (let i = 0; i < s.length; i++) {
    const a = bubbleFromCenter(s, i, i),
          b = s[i] === s[i + 1] ? bubbleFromCenter(s, i, i + 1) : '',
          t = a.length > b.length ? a : b;
    if(t.length > ans.length) ans = t
  }
  return ans
};