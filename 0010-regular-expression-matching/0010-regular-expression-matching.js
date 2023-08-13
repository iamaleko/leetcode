const isMatch = (s, p) => {
    const tokens = [];
    for (let char of p) {
        if (char === '.') {
            char = null;
        }
        if (char === '*') {
            if (
                tokens[tokens.length - 1].char === tokens[tokens.length - 2]?.char &&
                tokens[tokens.length - 2]?.count === null
            ) { // skip duplicate
                tokens.pop();
            } else {
                tokens[tokens.length - 1].count = null;
            }
        } else {
            tokens.push({char: char, count: 1});
        }
    }
    
    const match = (str, tokens, pointer, count = null) => {
        const token = tokens[pointer];
        const tokenCount = count || token?.count;
        
        if (!token) {
            return !str.length; // tokens and pattern must ends in the same time
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
                let substr = str.substr(0, tokenCount);
                let pattern = token.char.padStart(tokenCount, token.char);
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