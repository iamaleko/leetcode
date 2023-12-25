/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = (s) => {
    if (!s.length || s[0] === '0') return 0;

	const mem = new Array(s.length + 1).fill(0); 
	
	mem[0] = 1 
	mem[1] = 1
    
    for (let i = 2; i < s.length + 1; ++i) {
        let n;
        
        n = +s.substr(i-1, 1);
        if (n > 0 && n < 10) mem[i] += mem[i - 1];
        
        n = +s.substr(i-2, 2);
        if (n > 9 && n < 27) mem[i] += mem[i - 2];
    }

	return mem[s.length]
};