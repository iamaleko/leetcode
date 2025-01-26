type Token struct {
  Rune rune
  Count int
}

func getPatternTokens(p string) *[]Token {
  tokens := []Token{}
  p += " "
  for i, rn := range p[:len(p) - 1] {
    ln := len(tokens)
    var tail, pretail *Token
    if ln > 0 { tail = &tokens[ln - 1] }
    if ln > 1 { pretail = &tokens[ln - 2] }

    if (rn == '*') {
      if (pretail != nil && tail.Rune == pretail.Rune && pretail.Count == 0) { // skip duplicate
        tokens = tokens[:ln - 1]
      } else {
        tail.Count = 0
      }
    } else if (tail != nil && tail.Rune == rn && tail.Count > 0 && p[i + 1] != '*') { // skip duplicate
      tail.Count++
    } else {
      tokens = append(tokens, Token{ rn, 1 })
    }
  }
  return &tokens
}

func matchTokens(s string, tokens *[]Token, pointer int, tokenCount int) bool {
  if pointer >= len(*tokens) {
    // tokens and pattern must ends at the same position
    return len(s) == 0
  }

  token := &(*tokens)[pointer]
  if tokenCount == 0 { tokenCount = token.Count }
  
  if tokenCount == 0 { // any match
    if matchTokens(s, tokens, pointer + 1, 0) { // try skip token
      return true
    }  
    for i := len(s); i > 0; i-- {
      if matchTokens(s, tokens, pointer, i) { // try same token but greedy descending count
        return true
      }
    }
    return false
  } else { // long match
    if tokenCount > len(s) { // string too short
      return false
    }
    if token.Rune == '.' { // continue testing
      return matchTokens(s[tokenCount:], tokens, pointer + 1, 0);
    } else {
      substr := s[:tokenCount]
      pattern := strings.Repeat(string(token.Rune), tokenCount)
      
      if substr != pattern { // not matched
        return false
      } else { // continue testing
        return matchTokens(s[tokenCount:], tokens, pointer + 1, 0);
      }   
    }
  }
}

func isMatch(s string, p string) bool {
  tokens := getPatternTokens(p)
  return matchTokens(s, tokens, 0, 0)
}