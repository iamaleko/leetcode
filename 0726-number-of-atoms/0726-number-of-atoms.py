class Solution:
  def countOfAtoms(self, formula: str) -> str:
    st = []
    acc = None

    for symbol in formula:
      if symbol == '(' or symbol == ')':
        if acc != None:
          st.append(acc)
          acc = None
        st.append(symbol)  
      elif symbol.isnumeric(): # numbers
        if type(acc) == str:
          st.append(acc)
          acc = 0
        if type(acc) != int:
          acc = 0
        acc = acc * 10 + int(symbol)
      else: # strings
        if type(acc) == int or type(acc) == str and symbol.isupper():
          st.append(acc)
          acc = ''
        if type(acc) != str:
          acc = ''
        acc += symbol
    if acc != None:
      st.append(acc)

    counter = defaultdict(int)
    multiplier = [1]
    while st:
      count = 1
      symbol = st.pop()
      if type(symbol) == int:
        count = symbol
        symbol = st.pop()
      if symbol == ')':
        multiplier.append(multiplier[-1] * count)
      elif symbol == '(':
        multiplier.pop()
      else:
        counter[symbol] += count * multiplier[-1]
    
    counter = sorted(counter.items(), key=lambda item: item[0])
    
    ans = ''
    for symbol, count in counter:
      ans += symbol
      if count > 1:
        ans += str(count)

    return ans


      
        