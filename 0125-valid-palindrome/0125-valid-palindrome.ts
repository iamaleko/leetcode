function isPalindrome(s: string): boolean {
  const arr = s.toLowerCase().split('').filter((v) => {
    const code = v.charCodeAt(0);
    return code >= 48 && code <= 57 || code >= 97 && code <= 122;
  });
  return arr.join() === arr.reverse().join()
};