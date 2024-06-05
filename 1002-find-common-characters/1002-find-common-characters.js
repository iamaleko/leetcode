const commonChars = (words) => {
  let d = {}
  for (const letter of words[0]) {
    d[letter] = (d[letter] ?? 0) + 1
  }

  for (let i = 1; i < words.length; i++) {
    _d = {}
    for (const letter of words[i]) {
      if (d[letter]) {
        _d[letter] = (_d[letter] ?? 0) + 1
        d[letter]--
      }
    }
    if (Object.keys(_d).length === 0) return []
    d = _d
  }

  const res = []
  for (const letter in d) {
    while(d[letter]) {
      res.push(letter)
      d[letter]--
    }
  }
  return res
};