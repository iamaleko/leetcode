const isMatch = (s, p) => {
    // tokenize pattern, remove duplicates
    const tokens = [];
    for (let i = 0, j = -1; i < p.length; ++i) {
        const char = p[i] === '.' ? null : p[i];
        if (char === '*') {
            if ( j > 0 && tokens[j].char === tokens[j - 1]?.char && tokens[j - 1].count === null) { // skip duplicate
                tokens.pop();
                --j;
            } else {
                tokens[j].count = null;
            }
        } else if (j > -1 && tokens[j].char === char && tokens[j].count !== null && p[i + 1] !== '*') { // skip duplicate
			++tokens[j].count;
		} else {
			tokens.push({char: char, count: 1});
			++j;
		}
    }
    
    // match string to tokens
    const match = (str, tokens, pointer, count = null) => {
        const token = tokens[pointer],
              tokenCount = count || token?.count;
        
        if (!token) {
            return !str.length; // tokens and pattern must ends at the same position
        }
        
        if (tokenCount === null) { // any match
            if (match(str, tokens, pointer + 1)) { // try skip token
                return true;
            }
            
            let i = str.length + 1;
            while (--i) {
                if (match(str, tokens, pointer, i)) { // try same token but greedy descending count
                    return true;
                }
            }
            return false;
        } else { // long match
            if (tokenCount > str.length) { // string too short
                return false;
            }
            
            if (token.char === null) { // continue testing
                return match(str.substr(tokenCount), tokens, pointer + 1);
            } else {
                let substr = str.substr(0, tokenCount),
                    pattern = token.char.padStart(tokenCount, token.char);
                
                if (substr !== pattern) { // not matched
                    return false;
                } else { // continue testing
                    return match(str.substr(tokenCount), tokens, pointer + 1);
                }   
            }
        }
    } 
    
    return match(s, tokens, 0);
};